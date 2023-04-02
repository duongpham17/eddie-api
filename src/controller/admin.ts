import { NextFunction, Response } from 'express';
import { asyncBlock, appError } from '../@utils/helper';
import { InjectUserToRequest } from '../@types/models';

import User from '../model/users';
import Prices from '../model/prices';

export const get_users = asyncBlock(async (req: InjectUserToRequest, res: Response, next: NextFunction) => {

    const data = await User.find();

    if(!data) return next(new appError('cannot find any users', 401));

    res.status(201).json({
        status: "success",
        data
    });
});

export const update_users = asyncBlock(async (req: InjectUserToRequest, res: Response, next: NextFunction) => {

    const user = await User.findByIdAndUpdate(req.body._id, {...req.body}, {new: true});

    if(!user) return next(new appError('cannot update user data', 401));

    res.status(201).json({
        status: "success",
        data: user
    });
});

export const get_prices = asyncBlock(async (req: InjectUserToRequest, res: Response, next: NextFunction) => {

    const prices = await Prices.find().sort({createdAt: -1});

    if(!prices) return next(new appError('cannot find any prices', 401));

    res.status(201).json({
        status: "success",
        data: prices
    });
});

export const create_prices = asyncBlock(async (req: InjectUserToRequest, res: Response, next: NextFunction) => {

    const prices = await Prices.create({...req.body, createdAt: new Date()});

    if(!prices) return next(new appError('cannot find any prices', 401));

    res.status(201).json({
        status: "success",
        data: prices
    });
});

export const update_prices = asyncBlock(async (req: InjectUserToRequest, res: Response, next: NextFunction) => {

    const prices = await Prices.findByIdAndUpdate(req.body._id, req.body, {new: true});

    if(!prices) return next(new appError('cannot update prices data', 401));

    res.status(201).json({
        status: "success",
        data: prices
    });
});


export const delete_prices = asyncBlock(async (req: InjectUserToRequest, res: Response, next: NextFunction) => {

    const prices = await Prices.findByIdAndDelete(req.params.id);

    if(!prices) return next(new appError('cannot update prices data', 401));

    res.status(201).json({
        status: "success",
        data: prices
    });
});