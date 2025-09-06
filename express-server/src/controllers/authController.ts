import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import { generateToken } from '../middleware/auth';
import { createError } from '../middleware/errorHandler';
import { UserInput, LoginInput, AuthResponse, UserResponse } from '../types';

export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password, firstName, lastName }: UserInput = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw createError('User with this email already exists', 409);
    }

    // Create new user
    const user = await User.create({
      email,
      password,
      firstName,
      lastName
    });

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email
    });

    // Prepare response (exclude password)
    const userResponse: UserResponse = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    const response: AuthResponse = {
      user: userResponse,
      token
    };

    res.status(201).json({
      message: 'User created successfully',
      data: response
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password }: LoginInput = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw createError('Invalid email or password', 401);
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw createError('Invalid email or password', 401);
    }

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email
    });

    // Prepare response (exclude password)
    const userResponse: UserResponse = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    const response: AuthResponse = {
      user: userResponse,
      token
    };

    res.status(200).json({
      message: 'Login successful',
      data: response
    });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      throw createError('User not authenticated', 401);
    }

    const user = await User.findByPk(userId);
    if (!user) {
      throw createError('User not found', 404);
    }

    // Prepare response (exclude password)
    const userResponse: UserResponse = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    res.status(200).json({
      message: 'Profile retrieved successfully',
      data: userResponse
    });
  } catch (error) {
    next(error);
  }
};
