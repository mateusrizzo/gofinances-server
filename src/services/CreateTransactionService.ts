import { getCustomRepository} from 'typeorm';
// import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
    title: string;
    type: 'income'|'outcome';
    value: number;
    category: string;
}

class CreateTransactionService {
  public async execute({title, type, value, category}: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const findCategoryId = await transactionRepository.findOne({
      where: {category}
    });


  }
}

export default CreateTransactionService;
