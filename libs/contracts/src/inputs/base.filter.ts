/* tslint:disable:max-classes-per-file */
import { ArgsType, Field, InputType, Int } from 'type-graphql';
import { ClassType } from 'type-graphql';
import { Class } from '@babel/types';

export function FilterMongo<TItem>(TItemClass: ClassType<TItem>): any {

  type Page = keyof TItem;

  const x: Record<Page, TItem> = {
    // @ts-ignore
    test: 'hope',
  };

  // tslint:disable-next-line:no-console
  console.log(x);

  @InputType()
  abstract class FilterMongoClass {
    @Field(() => Int)
    total?: number;
  }

  @ArgsType()
  abstract class WhereFilter {
    @Field(() => FilterMongoClass)
    where?: FilterMongoClass;
  }
  // WhereFilter.prototype.name = `${TItemClass.name}Filter`;

  return WhereFilter;
}

function getSpecialProperty<TModel, TKey extends keyof TModel>(
  model: ClassType<TModel>,
  key: string,
) {
  return model[key];
}

function getMetaDataFields<TargetClass>() {
  // @ts-ignore
  type keys = keyof TargetClass;

  const d: keys = null;

  // tslint:disable-next-line:no-console
  console.log('keys => ', d);
}