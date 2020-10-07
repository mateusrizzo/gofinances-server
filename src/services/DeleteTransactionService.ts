import AppError from '../errors/AppError';

import { getCustomRepository } from "typeorm";
import TransactionsRepository from "../repositories/TransactionsRepository";
import Transaction from '../models/Transaction';



class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionForDelete = await transactionsRepository.findOne(id);

    if(!transactionForDelete) {
      throw new AppError('Transaction not found');
    }

    await transactionsRepository.remove(transactionForDelete);

    return;


  }
}

export default DeleteTransactionService;
