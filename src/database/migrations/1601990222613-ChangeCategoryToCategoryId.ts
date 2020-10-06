import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class ChangeCategoryToCategoryId1601990222613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn('transactions', 'category');
        await queryRunner.addColumn('transactions', new TableColumn({
            name: 'category_id',
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('transactions', new TableForeignKey({
            name: 'TransactionCategory',
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'category',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('transactions', 'TransactionCategory');
        await queryRunner.dropColumn('transactions', 'category_id');
        await queryRunner.addColumn('transactions', new TableColumn({
            name: 'category',
            type: 'varchar'
        }))
    }

}
