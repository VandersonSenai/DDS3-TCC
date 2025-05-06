
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>
/**
 * Model cliente
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model destinatario
 * 
 */
export type destinatario = $Result.DefaultSelection<Prisma.$destinatarioPayload>
/**
 * Model destino
 * 
 */
export type destino = $Result.DefaultSelection<Prisma.$destinoPayload>
/**
 * Model est_andamento
 * 
 */
export type est_andamento = $Result.DefaultSelection<Prisma.$est_andamentoPayload>
/**
 * Model est_andamento_pedido
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type est_andamento_pedido = $Result.DefaultSelection<Prisma.$est_andamento_pedidoPayload>
/**
 * Model info_cancelamento
 * 
 */
export type info_cancelamento = $Result.DefaultSelection<Prisma.$info_cancelamentoPayload>
/**
 * Model info_pagamento
 * 
 */
export type info_pagamento = $Result.DefaultSelection<Prisma.$info_pagamentoPayload>
/**
 * Model info_pf
 * 
 */
export type info_pf = $Result.DefaultSelection<Prisma.$info_pfPayload>
/**
 * Model info_pj
 * 
 */
export type info_pj = $Result.DefaultSelection<Prisma.$info_pjPayload>
/**
 * Model intercorrencia
 * 
 */
export type intercorrencia = $Result.DefaultSelection<Prisma.$intercorrenciaPayload>
/**
 * Model pedido
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>
/**
 * Model produto
 * 
 */
export type produto = $Result.DefaultSelection<Prisma.$produtoPayload>
/**
 * Model produto_pedido
 * 
 */
export type produto_pedido = $Result.DefaultSelection<Prisma.$produto_pedidoPayload>
/**
 * Model unidade
 * 
 */
export type unidade = $Result.DefaultSelection<Prisma.$unidadePayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const usuario_tipo: {
  administrador: 'administrador',
  atendente: 'atendente'
};

export type usuario_tipo = (typeof usuario_tipo)[keyof typeof usuario_tipo]


export const pedido_tipo_entrega: {
  ENVIO: 'ENVIO',
  RETIRADA: 'RETIRADA'
};

export type pedido_tipo_entrega = (typeof pedido_tipo_entrega)[keyof typeof pedido_tipo_entrega]

}

export type usuario_tipo = $Enums.usuario_tipo

export const usuario_tipo: typeof $Enums.usuario_tipo

export type pedido_tipo_entrega = $Enums.pedido_tipo_entrega

export const pedido_tipo_entrega: typeof $Enums.pedido_tipo_entrega

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destinatario`: Exposes CRUD operations for the **destinatario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinatarios
    * const destinatarios = await prisma.destinatario.findMany()
    * ```
    */
  get destinatario(): Prisma.destinatarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destino`: Exposes CRUD operations for the **destino** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinos
    * const destinos = await prisma.destino.findMany()
    * ```
    */
  get destino(): Prisma.destinoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.est_andamento`: Exposes CRUD operations for the **est_andamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Est_andamentos
    * const est_andamentos = await prisma.est_andamento.findMany()
    * ```
    */
  get est_andamento(): Prisma.est_andamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.est_andamento_pedido`: Exposes CRUD operations for the **est_andamento_pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Est_andamento_pedidos
    * const est_andamento_pedidos = await prisma.est_andamento_pedido.findMany()
    * ```
    */
  get est_andamento_pedido(): Prisma.est_andamento_pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.info_cancelamento`: Exposes CRUD operations for the **info_cancelamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Info_cancelamentos
    * const info_cancelamentos = await prisma.info_cancelamento.findMany()
    * ```
    */
  get info_cancelamento(): Prisma.info_cancelamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.info_pagamento`: Exposes CRUD operations for the **info_pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Info_pagamentos
    * const info_pagamentos = await prisma.info_pagamento.findMany()
    * ```
    */
  get info_pagamento(): Prisma.info_pagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.info_pf`: Exposes CRUD operations for the **info_pf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Info_pfs
    * const info_pfs = await prisma.info_pf.findMany()
    * ```
    */
  get info_pf(): Prisma.info_pfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.info_pj`: Exposes CRUD operations for the **info_pj** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Info_pjs
    * const info_pjs = await prisma.info_pj.findMany()
    * ```
    */
  get info_pj(): Prisma.info_pjDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intercorrencia`: Exposes CRUD operations for the **intercorrencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Intercorrencias
    * const intercorrencias = await prisma.intercorrencia.findMany()
    * ```
    */
  get intercorrencia(): Prisma.intercorrenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.produtoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto_pedido`: Exposes CRUD operations for the **produto_pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produto_pedidos
    * const produto_pedidos = await prisma.produto_pedido.findMany()
    * ```
    */
  get produto_pedido(): Prisma.produto_pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unidade`: Exposes CRUD operations for the **unidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unidades
    * const unidades = await prisma.unidade.findMany()
    * ```
    */
  get unidade(): Prisma.unidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categoria: 'categoria',
    cliente: 'cliente',
    destinatario: 'destinatario',
    destino: 'destino',
    est_andamento: 'est_andamento',
    est_andamento_pedido: 'est_andamento_pedido',
    info_cancelamento: 'info_cancelamento',
    info_pagamento: 'info_pagamento',
    info_pf: 'info_pf',
    info_pj: 'info_pj',
    intercorrencia: 'intercorrencia',
    pedido: 'pedido',
    produto: 'produto',
    produto_pedido: 'produto_pedido',
    unidade: 'unidade',
    usuario: 'usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categoria" | "cliente" | "destinatario" | "destino" | "est_andamento" | "est_andamento_pedido" | "info_cancelamento" | "info_pagamento" | "info_pf" | "info_pj" | "intercorrencia" | "pedido" | "produto" | "produto_pedido" | "unidade" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      destinatario: {
        payload: Prisma.$destinatarioPayload<ExtArgs>
        fields: Prisma.destinatarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.destinatarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinatarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.destinatarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinatarioPayload>
          }
          findFirst: {
            args: Prisma.destinatarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinatarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.destinatarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinatarioPayload>
          }
          findMany: {
            args: Prisma.destinatarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinatarioPayload>[]
          }
          create: {
            args: Prisma.destinatarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinatarioPayload>
          }
          createMany: {
            args: Prisma.destinatarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.destinatarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinatarioPayload>
          }
          update: {
            args: Prisma.destinatarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinatarioPayload>
          }
          deleteMany: {
            args: Prisma.destinatarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.destinatarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.destinatarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinatarioPayload>
          }
          aggregate: {
            args: Prisma.DestinatarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinatario>
          }
          groupBy: {
            args: Prisma.destinatarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinatarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.destinatarioCountArgs<ExtArgs>
            result: $Utils.Optional<DestinatarioCountAggregateOutputType> | number
          }
        }
      }
      destino: {
        payload: Prisma.$destinoPayload<ExtArgs>
        fields: Prisma.destinoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.destinoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.destinoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinoPayload>
          }
          findFirst: {
            args: Prisma.destinoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.destinoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinoPayload>
          }
          findMany: {
            args: Prisma.destinoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinoPayload>[]
          }
          create: {
            args: Prisma.destinoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinoPayload>
          }
          createMany: {
            args: Prisma.destinoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.destinoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinoPayload>
          }
          update: {
            args: Prisma.destinoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinoPayload>
          }
          deleteMany: {
            args: Prisma.destinoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.destinoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.destinoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinoPayload>
          }
          aggregate: {
            args: Prisma.DestinoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestino>
          }
          groupBy: {
            args: Prisma.destinoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinoGroupByOutputType>[]
          }
          count: {
            args: Prisma.destinoCountArgs<ExtArgs>
            result: $Utils.Optional<DestinoCountAggregateOutputType> | number
          }
        }
      }
      est_andamento: {
        payload: Prisma.$est_andamentoPayload<ExtArgs>
        fields: Prisma.est_andamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.est_andamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.est_andamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamentoPayload>
          }
          findFirst: {
            args: Prisma.est_andamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.est_andamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamentoPayload>
          }
          findMany: {
            args: Prisma.est_andamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamentoPayload>[]
          }
          create: {
            args: Prisma.est_andamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamentoPayload>
          }
          createMany: {
            args: Prisma.est_andamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.est_andamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamentoPayload>
          }
          update: {
            args: Prisma.est_andamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamentoPayload>
          }
          deleteMany: {
            args: Prisma.est_andamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.est_andamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.est_andamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamentoPayload>
          }
          aggregate: {
            args: Prisma.Est_andamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEst_andamento>
          }
          groupBy: {
            args: Prisma.est_andamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Est_andamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.est_andamentoCountArgs<ExtArgs>
            result: $Utils.Optional<Est_andamentoCountAggregateOutputType> | number
          }
        }
      }
      est_andamento_pedido: {
        payload: Prisma.$est_andamento_pedidoPayload<ExtArgs>
        fields: Prisma.est_andamento_pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.est_andamento_pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamento_pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.est_andamento_pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamento_pedidoPayload>
          }
          findFirst: {
            args: Prisma.est_andamento_pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamento_pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.est_andamento_pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamento_pedidoPayload>
          }
          findMany: {
            args: Prisma.est_andamento_pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamento_pedidoPayload>[]
          }
          create: {
            args: Prisma.est_andamento_pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamento_pedidoPayload>
          }
          createMany: {
            args: Prisma.est_andamento_pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.est_andamento_pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamento_pedidoPayload>
          }
          update: {
            args: Prisma.est_andamento_pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamento_pedidoPayload>
          }
          deleteMany: {
            args: Prisma.est_andamento_pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.est_andamento_pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.est_andamento_pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$est_andamento_pedidoPayload>
          }
          aggregate: {
            args: Prisma.Est_andamento_pedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEst_andamento_pedido>
          }
          groupBy: {
            args: Prisma.est_andamento_pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Est_andamento_pedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.est_andamento_pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<Est_andamento_pedidoCountAggregateOutputType> | number
          }
        }
      }
      info_cancelamento: {
        payload: Prisma.$info_cancelamentoPayload<ExtArgs>
        fields: Prisma.info_cancelamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.info_cancelamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_cancelamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.info_cancelamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_cancelamentoPayload>
          }
          findFirst: {
            args: Prisma.info_cancelamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_cancelamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.info_cancelamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_cancelamentoPayload>
          }
          findMany: {
            args: Prisma.info_cancelamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_cancelamentoPayload>[]
          }
          create: {
            args: Prisma.info_cancelamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_cancelamentoPayload>
          }
          createMany: {
            args: Prisma.info_cancelamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.info_cancelamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_cancelamentoPayload>
          }
          update: {
            args: Prisma.info_cancelamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_cancelamentoPayload>
          }
          deleteMany: {
            args: Prisma.info_cancelamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.info_cancelamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.info_cancelamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_cancelamentoPayload>
          }
          aggregate: {
            args: Prisma.Info_cancelamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfo_cancelamento>
          }
          groupBy: {
            args: Prisma.info_cancelamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Info_cancelamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.info_cancelamentoCountArgs<ExtArgs>
            result: $Utils.Optional<Info_cancelamentoCountAggregateOutputType> | number
          }
        }
      }
      info_pagamento: {
        payload: Prisma.$info_pagamentoPayload<ExtArgs>
        fields: Prisma.info_pagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.info_pagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.info_pagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pagamentoPayload>
          }
          findFirst: {
            args: Prisma.info_pagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.info_pagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pagamentoPayload>
          }
          findMany: {
            args: Prisma.info_pagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pagamentoPayload>[]
          }
          create: {
            args: Prisma.info_pagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pagamentoPayload>
          }
          createMany: {
            args: Prisma.info_pagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.info_pagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pagamentoPayload>
          }
          update: {
            args: Prisma.info_pagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pagamentoPayload>
          }
          deleteMany: {
            args: Prisma.info_pagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.info_pagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.info_pagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pagamentoPayload>
          }
          aggregate: {
            args: Prisma.Info_pagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfo_pagamento>
          }
          groupBy: {
            args: Prisma.info_pagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Info_pagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.info_pagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<Info_pagamentoCountAggregateOutputType> | number
          }
        }
      }
      info_pf: {
        payload: Prisma.$info_pfPayload<ExtArgs>
        fields: Prisma.info_pfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.info_pfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.info_pfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pfPayload>
          }
          findFirst: {
            args: Prisma.info_pfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.info_pfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pfPayload>
          }
          findMany: {
            args: Prisma.info_pfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pfPayload>[]
          }
          create: {
            args: Prisma.info_pfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pfPayload>
          }
          createMany: {
            args: Prisma.info_pfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.info_pfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pfPayload>
          }
          update: {
            args: Prisma.info_pfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pfPayload>
          }
          deleteMany: {
            args: Prisma.info_pfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.info_pfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.info_pfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pfPayload>
          }
          aggregate: {
            args: Prisma.Info_pfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfo_pf>
          }
          groupBy: {
            args: Prisma.info_pfGroupByArgs<ExtArgs>
            result: $Utils.Optional<Info_pfGroupByOutputType>[]
          }
          count: {
            args: Prisma.info_pfCountArgs<ExtArgs>
            result: $Utils.Optional<Info_pfCountAggregateOutputType> | number
          }
        }
      }
      info_pj: {
        payload: Prisma.$info_pjPayload<ExtArgs>
        fields: Prisma.info_pjFieldRefs
        operations: {
          findUnique: {
            args: Prisma.info_pjFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pjPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.info_pjFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pjPayload>
          }
          findFirst: {
            args: Prisma.info_pjFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pjPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.info_pjFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pjPayload>
          }
          findMany: {
            args: Prisma.info_pjFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pjPayload>[]
          }
          create: {
            args: Prisma.info_pjCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pjPayload>
          }
          createMany: {
            args: Prisma.info_pjCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.info_pjDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pjPayload>
          }
          update: {
            args: Prisma.info_pjUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pjPayload>
          }
          deleteMany: {
            args: Prisma.info_pjDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.info_pjUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.info_pjUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$info_pjPayload>
          }
          aggregate: {
            args: Prisma.Info_pjAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfo_pj>
          }
          groupBy: {
            args: Prisma.info_pjGroupByArgs<ExtArgs>
            result: $Utils.Optional<Info_pjGroupByOutputType>[]
          }
          count: {
            args: Prisma.info_pjCountArgs<ExtArgs>
            result: $Utils.Optional<Info_pjCountAggregateOutputType> | number
          }
        }
      }
      intercorrencia: {
        payload: Prisma.$intercorrenciaPayload<ExtArgs>
        fields: Prisma.intercorrenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.intercorrenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intercorrenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.intercorrenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intercorrenciaPayload>
          }
          findFirst: {
            args: Prisma.intercorrenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intercorrenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.intercorrenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intercorrenciaPayload>
          }
          findMany: {
            args: Prisma.intercorrenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intercorrenciaPayload>[]
          }
          create: {
            args: Prisma.intercorrenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intercorrenciaPayload>
          }
          createMany: {
            args: Prisma.intercorrenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.intercorrenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intercorrenciaPayload>
          }
          update: {
            args: Prisma.intercorrenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intercorrenciaPayload>
          }
          deleteMany: {
            args: Prisma.intercorrenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.intercorrenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.intercorrenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intercorrenciaPayload>
          }
          aggregate: {
            args: Prisma.IntercorrenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntercorrencia>
          }
          groupBy: {
            args: Prisma.intercorrenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntercorrenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.intercorrenciaCountArgs<ExtArgs>
            result: $Utils.Optional<IntercorrenciaCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      produto: {
        payload: Prisma.$produtoPayload<ExtArgs>
        fields: Prisma.produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findFirst: {
            args: Prisma.produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findMany: {
            args: Prisma.produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>[]
          }
          create: {
            args: Prisma.produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          createMany: {
            args: Prisma.produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          update: {
            args: Prisma.produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          deleteMany: {
            args: Prisma.produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.produtoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      produto_pedido: {
        payload: Prisma.$produto_pedidoPayload<ExtArgs>
        fields: Prisma.produto_pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produto_pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produto_pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_pedidoPayload>
          }
          findFirst: {
            args: Prisma.produto_pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produto_pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_pedidoPayload>
          }
          findMany: {
            args: Prisma.produto_pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_pedidoPayload>[]
          }
          create: {
            args: Prisma.produto_pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_pedidoPayload>
          }
          createMany: {
            args: Prisma.produto_pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.produto_pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_pedidoPayload>
          }
          update: {
            args: Prisma.produto_pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_pedidoPayload>
          }
          deleteMany: {
            args: Prisma.produto_pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produto_pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produto_pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_pedidoPayload>
          }
          aggregate: {
            args: Prisma.Produto_pedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto_pedido>
          }
          groupBy: {
            args: Prisma.produto_pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Produto_pedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.produto_pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<Produto_pedidoCountAggregateOutputType> | number
          }
        }
      }
      unidade: {
        payload: Prisma.$unidadePayload<ExtArgs>
        fields: Prisma.unidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.unidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.unidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadePayload>
          }
          findFirst: {
            args: Prisma.unidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.unidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadePayload>
          }
          findMany: {
            args: Prisma.unidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadePayload>[]
          }
          create: {
            args: Prisma.unidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadePayload>
          }
          createMany: {
            args: Prisma.unidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.unidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadePayload>
          }
          update: {
            args: Prisma.unidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadePayload>
          }
          deleteMany: {
            args: Prisma.unidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.unidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.unidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadePayload>
          }
          aggregate: {
            args: Prisma.UnidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnidade>
          }
          groupBy: {
            args: Prisma.unidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.unidadeCountArgs<ExtArgs>
            result: $Utils.Optional<UnidadeCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categoria?: categoriaOmit
    cliente?: clienteOmit
    destinatario?: destinatarioOmit
    destino?: destinoOmit
    est_andamento?: est_andamentoOmit
    est_andamento_pedido?: est_andamento_pedidoOmit
    info_cancelamento?: info_cancelamentoOmit
    info_pagamento?: info_pagamentoOmit
    info_pf?: info_pfOmit
    info_pj?: info_pjOmit
    intercorrencia?: intercorrenciaOmit
    pedido?: pedidoOmit
    produto?: produtoOmit
    produto_pedido?: produto_pedidoOmit
    unidade?: unidadeOmit
    usuario?: usuarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    produto: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | CategoriaCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pedido: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | ClienteCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Count Type Est_andamentoCountOutputType
   */

  export type Est_andamentoCountOutputType = {
    est_andamento_pedido: number
  }

  export type Est_andamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    est_andamento_pedido?: boolean | Est_andamentoCountOutputTypeCountEst_andamento_pedidoArgs
  }

  // Custom InputTypes
  /**
   * Est_andamentoCountOutputType without action
   */
  export type Est_andamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Est_andamentoCountOutputType
     */
    select?: Est_andamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Est_andamentoCountOutputType without action
   */
  export type Est_andamentoCountOutputTypeCountEst_andamento_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: est_andamento_pedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    est_andamento_pedido: number
    intercorrencia: number
    produto_pedido: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    est_andamento_pedido?: boolean | PedidoCountOutputTypeCountEst_andamento_pedidoArgs
    intercorrencia?: boolean | PedidoCountOutputTypeCountIntercorrenciaArgs
    produto_pedido?: boolean | PedidoCountOutputTypeCountProduto_pedidoArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountEst_andamento_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: est_andamento_pedidoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountIntercorrenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intercorrenciaWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountProduto_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produto_pedidoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    produto_pedido: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto_pedido?: boolean | ProdutoCountOutputTypeCountProduto_pedidoArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountProduto_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produto_pedidoWhereInput
  }


  /**
   * Count Type UnidadeCountOutputType
   */

  export type UnidadeCountOutputType = {
    produto: number
  }

  export type UnidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | UnidadeCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * UnidadeCountOutputType without action
   */
  export type UnidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeCountOutputType
     */
    select?: UnidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnidadeCountOutputType without action
   */
  export type UnidadeCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    cliente: number
    intercorrencia: number
    produto: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioCountOutputTypeCountClienteArgs
    intercorrencia?: boolean | UsuarioCountOutputTypeCountIntercorrenciaArgs
    produto?: boolean | UsuarioCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountIntercorrenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intercorrenciaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    produto?: boolean | categoria$produtoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type categoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type categoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["categoria"]>
  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | categoria$produtoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      produto: Prisma.$produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriaFindUniqueArgs>(args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriaFindFirstArgs>(args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriaFindManyArgs>(args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends categoriaCreateArgs>(args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriaCreateManyArgs>(args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends categoriaDeleteArgs>(args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriaUpdateArgs>(args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriaDeleteManyArgs>(args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriaUpdateManyArgs>(args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends categoriaUpsertArgs>(args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends categoria$produtoArgs<ExtArgs> = {}>(args?: Subset<T, categoria$produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categoria model
   */
  interface categoriaFieldRefs {
    readonly id: FieldRef<"categoria", 'Int'>
    readonly nome: FieldRef<"categoria", 'String'>
    readonly descricao: FieldRef<"categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }

  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }

  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categoria.produto
   */
  export type categoria$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    cursor?: produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
  }


  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
    id_usuario_alt: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
    id_usuario_alt: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    id_usuario_alt: number | null
    dthr_alt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    id_usuario_alt: number | null
    dthr_alt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    id_usuario_alt: number
    dthr_alt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
    id_usuario_alt?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
    id_usuario_alt?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    id_usuario_alt?: true
    dthr_alt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    id_usuario_alt?: true
    dthr_alt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    id_usuario_alt?: true
    dthr_alt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    telefone: string
    id_usuario_alt: number | null
    dthr_alt: Date | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    id_usuario_alt?: boolean
    dthr_alt?: boolean
    usuario?: boolean | cliente$usuarioArgs<ExtArgs>
    pedido?: boolean | cliente$pedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type clienteSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    id_usuario_alt?: boolean
    dthr_alt?: boolean
  }

  export type clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "telefone" | "id_usuario_alt" | "dthr_alt", ExtArgs["result"]["cliente"]>
  export type clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | cliente$usuarioArgs<ExtArgs>
    pedido?: boolean | cliente$pedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      telefone: string
      id_usuario_alt: number | null
      dthr_alt: Date | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends cliente$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, cliente$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pedido<T extends cliente$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, cliente$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cliente model
   */
  interface clienteFieldRefs {
    readonly id: FieldRef<"cliente", 'Int'>
    readonly nome: FieldRef<"cliente", 'String'>
    readonly telefone: FieldRef<"cliente", 'String'>
    readonly id_usuario_alt: FieldRef<"cliente", 'Int'>
    readonly dthr_alt: FieldRef<"cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * cliente.usuario
   */
  export type cliente$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * cliente.pedido
   */
  export type cliente$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
  }


  /**
   * Model destinatario
   */

  export type AggregateDestinatario = {
    _count: DestinatarioCountAggregateOutputType | null
    _avg: DestinatarioAvgAggregateOutputType | null
    _sum: DestinatarioSumAggregateOutputType | null
    _min: DestinatarioMinAggregateOutputType | null
    _max: DestinatarioMaxAggregateOutputType | null
  }

  export type DestinatarioAvgAggregateOutputType = {
    id_pedido: number | null
  }

  export type DestinatarioSumAggregateOutputType = {
    id_pedido: number | null
  }

  export type DestinatarioMinAggregateOutputType = {
    id_pedido: number | null
    info: string | null
  }

  export type DestinatarioMaxAggregateOutputType = {
    id_pedido: number | null
    info: string | null
  }

  export type DestinatarioCountAggregateOutputType = {
    id_pedido: number
    info: number
    _all: number
  }


  export type DestinatarioAvgAggregateInputType = {
    id_pedido?: true
  }

  export type DestinatarioSumAggregateInputType = {
    id_pedido?: true
  }

  export type DestinatarioMinAggregateInputType = {
    id_pedido?: true
    info?: true
  }

  export type DestinatarioMaxAggregateInputType = {
    id_pedido?: true
    info?: true
  }

  export type DestinatarioCountAggregateInputType = {
    id_pedido?: true
    info?: true
    _all?: true
  }

  export type DestinatarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which destinatario to aggregate.
     */
    where?: destinatarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinatarios to fetch.
     */
    orderBy?: destinatarioOrderByWithRelationInput | destinatarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: destinatarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinatarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinatarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned destinatarios
    **/
    _count?: true | DestinatarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinatarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinatarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinatarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinatarioMaxAggregateInputType
  }

  export type GetDestinatarioAggregateType<T extends DestinatarioAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinatario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinatario[P]>
      : GetScalarType<T[P], AggregateDestinatario[P]>
  }




  export type destinatarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: destinatarioWhereInput
    orderBy?: destinatarioOrderByWithAggregationInput | destinatarioOrderByWithAggregationInput[]
    by: DestinatarioScalarFieldEnum[] | DestinatarioScalarFieldEnum
    having?: destinatarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinatarioCountAggregateInputType | true
    _avg?: DestinatarioAvgAggregateInputType
    _sum?: DestinatarioSumAggregateInputType
    _min?: DestinatarioMinAggregateInputType
    _max?: DestinatarioMaxAggregateInputType
  }

  export type DestinatarioGroupByOutputType = {
    id_pedido: number
    info: string
    _count: DestinatarioCountAggregateOutputType | null
    _avg: DestinatarioAvgAggregateOutputType | null
    _sum: DestinatarioSumAggregateOutputType | null
    _min: DestinatarioMinAggregateOutputType | null
    _max: DestinatarioMaxAggregateOutputType | null
  }

  type GetDestinatarioGroupByPayload<T extends destinatarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinatarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinatarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinatarioGroupByOutputType[P]>
            : GetScalarType<T[P], DestinatarioGroupByOutputType[P]>
        }
      >
    >


  export type destinatarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    info?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinatario"]>



  export type destinatarioSelectScalar = {
    id_pedido?: boolean
    info?: boolean
  }

  export type destinatarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pedido" | "info", ExtArgs["result"]["destinatario"]>
  export type destinatarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }

  export type $destinatarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "destinatario"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pedido: number
      info: string
    }, ExtArgs["result"]["destinatario"]>
    composites: {}
  }

  type destinatarioGetPayload<S extends boolean | null | undefined | destinatarioDefaultArgs> = $Result.GetResult<Prisma.$destinatarioPayload, S>

  type destinatarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<destinatarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinatarioCountAggregateInputType | true
    }

  export interface destinatarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['destinatario'], meta: { name: 'destinatario' } }
    /**
     * Find zero or one Destinatario that matches the filter.
     * @param {destinatarioFindUniqueArgs} args - Arguments to find a Destinatario
     * @example
     * // Get one Destinatario
     * const destinatario = await prisma.destinatario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends destinatarioFindUniqueArgs>(args: SelectSubset<T, destinatarioFindUniqueArgs<ExtArgs>>): Prisma__destinatarioClient<$Result.GetResult<Prisma.$destinatarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destinatario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {destinatarioFindUniqueOrThrowArgs} args - Arguments to find a Destinatario
     * @example
     * // Get one Destinatario
     * const destinatario = await prisma.destinatario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends destinatarioFindUniqueOrThrowArgs>(args: SelectSubset<T, destinatarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__destinatarioClient<$Result.GetResult<Prisma.$destinatarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destinatario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinatarioFindFirstArgs} args - Arguments to find a Destinatario
     * @example
     * // Get one Destinatario
     * const destinatario = await prisma.destinatario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends destinatarioFindFirstArgs>(args?: SelectSubset<T, destinatarioFindFirstArgs<ExtArgs>>): Prisma__destinatarioClient<$Result.GetResult<Prisma.$destinatarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destinatario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinatarioFindFirstOrThrowArgs} args - Arguments to find a Destinatario
     * @example
     * // Get one Destinatario
     * const destinatario = await prisma.destinatario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends destinatarioFindFirstOrThrowArgs>(args?: SelectSubset<T, destinatarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__destinatarioClient<$Result.GetResult<Prisma.$destinatarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinatarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinatarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinatarios
     * const destinatarios = await prisma.destinatario.findMany()
     * 
     * // Get first 10 Destinatarios
     * const destinatarios = await prisma.destinatario.findMany({ take: 10 })
     * 
     * // Only select the `id_pedido`
     * const destinatarioWithId_pedidoOnly = await prisma.destinatario.findMany({ select: { id_pedido: true } })
     * 
     */
    findMany<T extends destinatarioFindManyArgs>(args?: SelectSubset<T, destinatarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$destinatarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destinatario.
     * @param {destinatarioCreateArgs} args - Arguments to create a Destinatario.
     * @example
     * // Create one Destinatario
     * const Destinatario = await prisma.destinatario.create({
     *   data: {
     *     // ... data to create a Destinatario
     *   }
     * })
     * 
     */
    create<T extends destinatarioCreateArgs>(args: SelectSubset<T, destinatarioCreateArgs<ExtArgs>>): Prisma__destinatarioClient<$Result.GetResult<Prisma.$destinatarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinatarios.
     * @param {destinatarioCreateManyArgs} args - Arguments to create many Destinatarios.
     * @example
     * // Create many Destinatarios
     * const destinatario = await prisma.destinatario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends destinatarioCreateManyArgs>(args?: SelectSubset<T, destinatarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Destinatario.
     * @param {destinatarioDeleteArgs} args - Arguments to delete one Destinatario.
     * @example
     * // Delete one Destinatario
     * const Destinatario = await prisma.destinatario.delete({
     *   where: {
     *     // ... filter to delete one Destinatario
     *   }
     * })
     * 
     */
    delete<T extends destinatarioDeleteArgs>(args: SelectSubset<T, destinatarioDeleteArgs<ExtArgs>>): Prisma__destinatarioClient<$Result.GetResult<Prisma.$destinatarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destinatario.
     * @param {destinatarioUpdateArgs} args - Arguments to update one Destinatario.
     * @example
     * // Update one Destinatario
     * const destinatario = await prisma.destinatario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends destinatarioUpdateArgs>(args: SelectSubset<T, destinatarioUpdateArgs<ExtArgs>>): Prisma__destinatarioClient<$Result.GetResult<Prisma.$destinatarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinatarios.
     * @param {destinatarioDeleteManyArgs} args - Arguments to filter Destinatarios to delete.
     * @example
     * // Delete a few Destinatarios
     * const { count } = await prisma.destinatario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends destinatarioDeleteManyArgs>(args?: SelectSubset<T, destinatarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinatarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinatarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinatarios
     * const destinatario = await prisma.destinatario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends destinatarioUpdateManyArgs>(args: SelectSubset<T, destinatarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Destinatario.
     * @param {destinatarioUpsertArgs} args - Arguments to update or create a Destinatario.
     * @example
     * // Update or create a Destinatario
     * const destinatario = await prisma.destinatario.upsert({
     *   create: {
     *     // ... data to create a Destinatario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destinatario we want to update
     *   }
     * })
     */
    upsert<T extends destinatarioUpsertArgs>(args: SelectSubset<T, destinatarioUpsertArgs<ExtArgs>>): Prisma__destinatarioClient<$Result.GetResult<Prisma.$destinatarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinatarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinatarioCountArgs} args - Arguments to filter Destinatarios to count.
     * @example
     * // Count the number of Destinatarios
     * const count = await prisma.destinatario.count({
     *   where: {
     *     // ... the filter for the Destinatarios we want to count
     *   }
     * })
    **/
    count<T extends destinatarioCountArgs>(
      args?: Subset<T, destinatarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinatarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destinatario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinatarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinatarioAggregateArgs>(args: Subset<T, DestinatarioAggregateArgs>): Prisma.PrismaPromise<GetDestinatarioAggregateType<T>>

    /**
     * Group by Destinatario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinatarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends destinatarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: destinatarioGroupByArgs['orderBy'] }
        : { orderBy?: destinatarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, destinatarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinatarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the destinatario model
   */
  readonly fields: destinatarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for destinatario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__destinatarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the destinatario model
   */
  interface destinatarioFieldRefs {
    readonly id_pedido: FieldRef<"destinatario", 'Int'>
    readonly info: FieldRef<"destinatario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * destinatario findUnique
   */
  export type destinatarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
    /**
     * Filter, which destinatario to fetch.
     */
    where: destinatarioWhereUniqueInput
  }

  /**
   * destinatario findUniqueOrThrow
   */
  export type destinatarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
    /**
     * Filter, which destinatario to fetch.
     */
    where: destinatarioWhereUniqueInput
  }

  /**
   * destinatario findFirst
   */
  export type destinatarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
    /**
     * Filter, which destinatario to fetch.
     */
    where?: destinatarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinatarios to fetch.
     */
    orderBy?: destinatarioOrderByWithRelationInput | destinatarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for destinatarios.
     */
    cursor?: destinatarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinatarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinatarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of destinatarios.
     */
    distinct?: DestinatarioScalarFieldEnum | DestinatarioScalarFieldEnum[]
  }

  /**
   * destinatario findFirstOrThrow
   */
  export type destinatarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
    /**
     * Filter, which destinatario to fetch.
     */
    where?: destinatarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinatarios to fetch.
     */
    orderBy?: destinatarioOrderByWithRelationInput | destinatarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for destinatarios.
     */
    cursor?: destinatarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinatarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinatarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of destinatarios.
     */
    distinct?: DestinatarioScalarFieldEnum | DestinatarioScalarFieldEnum[]
  }

  /**
   * destinatario findMany
   */
  export type destinatarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
    /**
     * Filter, which destinatarios to fetch.
     */
    where?: destinatarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinatarios to fetch.
     */
    orderBy?: destinatarioOrderByWithRelationInput | destinatarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing destinatarios.
     */
    cursor?: destinatarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinatarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinatarios.
     */
    skip?: number
    distinct?: DestinatarioScalarFieldEnum | DestinatarioScalarFieldEnum[]
  }

  /**
   * destinatario create
   */
  export type destinatarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
    /**
     * The data needed to create a destinatario.
     */
    data: XOR<destinatarioCreateInput, destinatarioUncheckedCreateInput>
  }

  /**
   * destinatario createMany
   */
  export type destinatarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many destinatarios.
     */
    data: destinatarioCreateManyInput | destinatarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * destinatario update
   */
  export type destinatarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
    /**
     * The data needed to update a destinatario.
     */
    data: XOR<destinatarioUpdateInput, destinatarioUncheckedUpdateInput>
    /**
     * Choose, which destinatario to update.
     */
    where: destinatarioWhereUniqueInput
  }

  /**
   * destinatario updateMany
   */
  export type destinatarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update destinatarios.
     */
    data: XOR<destinatarioUpdateManyMutationInput, destinatarioUncheckedUpdateManyInput>
    /**
     * Filter which destinatarios to update
     */
    where?: destinatarioWhereInput
    /**
     * Limit how many destinatarios to update.
     */
    limit?: number
  }

  /**
   * destinatario upsert
   */
  export type destinatarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
    /**
     * The filter to search for the destinatario to update in case it exists.
     */
    where: destinatarioWhereUniqueInput
    /**
     * In case the destinatario found by the `where` argument doesn't exist, create a new destinatario with this data.
     */
    create: XOR<destinatarioCreateInput, destinatarioUncheckedCreateInput>
    /**
     * In case the destinatario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<destinatarioUpdateInput, destinatarioUncheckedUpdateInput>
  }

  /**
   * destinatario delete
   */
  export type destinatarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
    /**
     * Filter which destinatario to delete.
     */
    where: destinatarioWhereUniqueInput
  }

  /**
   * destinatario deleteMany
   */
  export type destinatarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which destinatarios to delete
     */
    where?: destinatarioWhereInput
    /**
     * Limit how many destinatarios to delete.
     */
    limit?: number
  }

  /**
   * destinatario without action
   */
  export type destinatarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
  }


  /**
   * Model destino
   */

  export type AggregateDestino = {
    _count: DestinoCountAggregateOutputType | null
    _avg: DestinoAvgAggregateOutputType | null
    _sum: DestinoSumAggregateOutputType | null
    _min: DestinoMinAggregateOutputType | null
    _max: DestinoMaxAggregateOutputType | null
  }

  export type DestinoAvgAggregateOutputType = {
    id_pedido: number | null
  }

  export type DestinoSumAggregateOutputType = {
    id_pedido: number | null
  }

  export type DestinoMinAggregateOutputType = {
    id_pedido: number | null
    logradouro: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    pais: string | null
  }

  export type DestinoMaxAggregateOutputType = {
    id_pedido: number | null
    logradouro: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    pais: string | null
  }

  export type DestinoCountAggregateOutputType = {
    id_pedido: number
    logradouro: number
    numero: number
    bairro: number
    cidade: number
    estado: number
    pais: number
    _all: number
  }


  export type DestinoAvgAggregateInputType = {
    id_pedido?: true
  }

  export type DestinoSumAggregateInputType = {
    id_pedido?: true
  }

  export type DestinoMinAggregateInputType = {
    id_pedido?: true
    logradouro?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    pais?: true
  }

  export type DestinoMaxAggregateInputType = {
    id_pedido?: true
    logradouro?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    pais?: true
  }

  export type DestinoCountAggregateInputType = {
    id_pedido?: true
    logradouro?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    pais?: true
    _all?: true
  }

  export type DestinoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which destino to aggregate.
     */
    where?: destinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinos to fetch.
     */
    orderBy?: destinoOrderByWithRelationInput | destinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: destinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned destinos
    **/
    _count?: true | DestinoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinoMaxAggregateInputType
  }

  export type GetDestinoAggregateType<T extends DestinoAggregateArgs> = {
        [P in keyof T & keyof AggregateDestino]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestino[P]>
      : GetScalarType<T[P], AggregateDestino[P]>
  }




  export type destinoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: destinoWhereInput
    orderBy?: destinoOrderByWithAggregationInput | destinoOrderByWithAggregationInput[]
    by: DestinoScalarFieldEnum[] | DestinoScalarFieldEnum
    having?: destinoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinoCountAggregateInputType | true
    _avg?: DestinoAvgAggregateInputType
    _sum?: DestinoSumAggregateInputType
    _min?: DestinoMinAggregateInputType
    _max?: DestinoMaxAggregateInputType
  }

  export type DestinoGroupByOutputType = {
    id_pedido: number
    logradouro: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    pais: string
    _count: DestinoCountAggregateOutputType | null
    _avg: DestinoAvgAggregateOutputType | null
    _sum: DestinoSumAggregateOutputType | null
    _min: DestinoMinAggregateOutputType | null
    _max: DestinoMaxAggregateOutputType | null
  }

  type GetDestinoGroupByPayload<T extends destinoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinoGroupByOutputType[P]>
            : GetScalarType<T[P], DestinoGroupByOutputType[P]>
        }
      >
    >


  export type destinoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    logradouro?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    pais?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destino"]>



  export type destinoSelectScalar = {
    id_pedido?: boolean
    logradouro?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    pais?: boolean
  }

  export type destinoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pedido" | "logradouro" | "numero" | "bairro" | "cidade" | "estado" | "pais", ExtArgs["result"]["destino"]>
  export type destinoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }

  export type $destinoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "destino"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pedido: number
      logradouro: string
      numero: string
      bairro: string
      cidade: string
      estado: string
      pais: string
    }, ExtArgs["result"]["destino"]>
    composites: {}
  }

  type destinoGetPayload<S extends boolean | null | undefined | destinoDefaultArgs> = $Result.GetResult<Prisma.$destinoPayload, S>

  type destinoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<destinoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinoCountAggregateInputType | true
    }

  export interface destinoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['destino'], meta: { name: 'destino' } }
    /**
     * Find zero or one Destino that matches the filter.
     * @param {destinoFindUniqueArgs} args - Arguments to find a Destino
     * @example
     * // Get one Destino
     * const destino = await prisma.destino.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends destinoFindUniqueArgs>(args: SelectSubset<T, destinoFindUniqueArgs<ExtArgs>>): Prisma__destinoClient<$Result.GetResult<Prisma.$destinoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destino that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {destinoFindUniqueOrThrowArgs} args - Arguments to find a Destino
     * @example
     * // Get one Destino
     * const destino = await prisma.destino.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends destinoFindUniqueOrThrowArgs>(args: SelectSubset<T, destinoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__destinoClient<$Result.GetResult<Prisma.$destinoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destino that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinoFindFirstArgs} args - Arguments to find a Destino
     * @example
     * // Get one Destino
     * const destino = await prisma.destino.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends destinoFindFirstArgs>(args?: SelectSubset<T, destinoFindFirstArgs<ExtArgs>>): Prisma__destinoClient<$Result.GetResult<Prisma.$destinoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destino that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinoFindFirstOrThrowArgs} args - Arguments to find a Destino
     * @example
     * // Get one Destino
     * const destino = await prisma.destino.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends destinoFindFirstOrThrowArgs>(args?: SelectSubset<T, destinoFindFirstOrThrowArgs<ExtArgs>>): Prisma__destinoClient<$Result.GetResult<Prisma.$destinoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinos
     * const destinos = await prisma.destino.findMany()
     * 
     * // Get first 10 Destinos
     * const destinos = await prisma.destino.findMany({ take: 10 })
     * 
     * // Only select the `id_pedido`
     * const destinoWithId_pedidoOnly = await prisma.destino.findMany({ select: { id_pedido: true } })
     * 
     */
    findMany<T extends destinoFindManyArgs>(args?: SelectSubset<T, destinoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$destinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destino.
     * @param {destinoCreateArgs} args - Arguments to create a Destino.
     * @example
     * // Create one Destino
     * const Destino = await prisma.destino.create({
     *   data: {
     *     // ... data to create a Destino
     *   }
     * })
     * 
     */
    create<T extends destinoCreateArgs>(args: SelectSubset<T, destinoCreateArgs<ExtArgs>>): Prisma__destinoClient<$Result.GetResult<Prisma.$destinoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinos.
     * @param {destinoCreateManyArgs} args - Arguments to create many Destinos.
     * @example
     * // Create many Destinos
     * const destino = await prisma.destino.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends destinoCreateManyArgs>(args?: SelectSubset<T, destinoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Destino.
     * @param {destinoDeleteArgs} args - Arguments to delete one Destino.
     * @example
     * // Delete one Destino
     * const Destino = await prisma.destino.delete({
     *   where: {
     *     // ... filter to delete one Destino
     *   }
     * })
     * 
     */
    delete<T extends destinoDeleteArgs>(args: SelectSubset<T, destinoDeleteArgs<ExtArgs>>): Prisma__destinoClient<$Result.GetResult<Prisma.$destinoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destino.
     * @param {destinoUpdateArgs} args - Arguments to update one Destino.
     * @example
     * // Update one Destino
     * const destino = await prisma.destino.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends destinoUpdateArgs>(args: SelectSubset<T, destinoUpdateArgs<ExtArgs>>): Prisma__destinoClient<$Result.GetResult<Prisma.$destinoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinos.
     * @param {destinoDeleteManyArgs} args - Arguments to filter Destinos to delete.
     * @example
     * // Delete a few Destinos
     * const { count } = await prisma.destino.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends destinoDeleteManyArgs>(args?: SelectSubset<T, destinoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinos
     * const destino = await prisma.destino.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends destinoUpdateManyArgs>(args: SelectSubset<T, destinoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Destino.
     * @param {destinoUpsertArgs} args - Arguments to update or create a Destino.
     * @example
     * // Update or create a Destino
     * const destino = await prisma.destino.upsert({
     *   create: {
     *     // ... data to create a Destino
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destino we want to update
     *   }
     * })
     */
    upsert<T extends destinoUpsertArgs>(args: SelectSubset<T, destinoUpsertArgs<ExtArgs>>): Prisma__destinoClient<$Result.GetResult<Prisma.$destinoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinoCountArgs} args - Arguments to filter Destinos to count.
     * @example
     * // Count the number of Destinos
     * const count = await prisma.destino.count({
     *   where: {
     *     // ... the filter for the Destinos we want to count
     *   }
     * })
    **/
    count<T extends destinoCountArgs>(
      args?: Subset<T, destinoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinoAggregateArgs>(args: Subset<T, DestinoAggregateArgs>): Prisma.PrismaPromise<GetDestinoAggregateType<T>>

    /**
     * Group by Destino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends destinoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: destinoGroupByArgs['orderBy'] }
        : { orderBy?: destinoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, destinoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the destino model
   */
  readonly fields: destinoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for destino.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__destinoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the destino model
   */
  interface destinoFieldRefs {
    readonly id_pedido: FieldRef<"destino", 'Int'>
    readonly logradouro: FieldRef<"destino", 'String'>
    readonly numero: FieldRef<"destino", 'String'>
    readonly bairro: FieldRef<"destino", 'String'>
    readonly cidade: FieldRef<"destino", 'String'>
    readonly estado: FieldRef<"destino", 'String'>
    readonly pais: FieldRef<"destino", 'String'>
  }
    

  // Custom InputTypes
  /**
   * destino findUnique
   */
  export type destinoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
    /**
     * Filter, which destino to fetch.
     */
    where: destinoWhereUniqueInput
  }

  /**
   * destino findUniqueOrThrow
   */
  export type destinoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
    /**
     * Filter, which destino to fetch.
     */
    where: destinoWhereUniqueInput
  }

  /**
   * destino findFirst
   */
  export type destinoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
    /**
     * Filter, which destino to fetch.
     */
    where?: destinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinos to fetch.
     */
    orderBy?: destinoOrderByWithRelationInput | destinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for destinos.
     */
    cursor?: destinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of destinos.
     */
    distinct?: DestinoScalarFieldEnum | DestinoScalarFieldEnum[]
  }

  /**
   * destino findFirstOrThrow
   */
  export type destinoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
    /**
     * Filter, which destino to fetch.
     */
    where?: destinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinos to fetch.
     */
    orderBy?: destinoOrderByWithRelationInput | destinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for destinos.
     */
    cursor?: destinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of destinos.
     */
    distinct?: DestinoScalarFieldEnum | DestinoScalarFieldEnum[]
  }

  /**
   * destino findMany
   */
  export type destinoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
    /**
     * Filter, which destinos to fetch.
     */
    where?: destinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinos to fetch.
     */
    orderBy?: destinoOrderByWithRelationInput | destinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing destinos.
     */
    cursor?: destinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinos.
     */
    skip?: number
    distinct?: DestinoScalarFieldEnum | DestinoScalarFieldEnum[]
  }

  /**
   * destino create
   */
  export type destinoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
    /**
     * The data needed to create a destino.
     */
    data: XOR<destinoCreateInput, destinoUncheckedCreateInput>
  }

  /**
   * destino createMany
   */
  export type destinoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many destinos.
     */
    data: destinoCreateManyInput | destinoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * destino update
   */
  export type destinoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
    /**
     * The data needed to update a destino.
     */
    data: XOR<destinoUpdateInput, destinoUncheckedUpdateInput>
    /**
     * Choose, which destino to update.
     */
    where: destinoWhereUniqueInput
  }

  /**
   * destino updateMany
   */
  export type destinoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update destinos.
     */
    data: XOR<destinoUpdateManyMutationInput, destinoUncheckedUpdateManyInput>
    /**
     * Filter which destinos to update
     */
    where?: destinoWhereInput
    /**
     * Limit how many destinos to update.
     */
    limit?: number
  }

  /**
   * destino upsert
   */
  export type destinoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
    /**
     * The filter to search for the destino to update in case it exists.
     */
    where: destinoWhereUniqueInput
    /**
     * In case the destino found by the `where` argument doesn't exist, create a new destino with this data.
     */
    create: XOR<destinoCreateInput, destinoUncheckedCreateInput>
    /**
     * In case the destino was found with the provided `where` argument, update it with this data.
     */
    update: XOR<destinoUpdateInput, destinoUncheckedUpdateInput>
  }

  /**
   * destino delete
   */
  export type destinoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
    /**
     * Filter which destino to delete.
     */
    where: destinoWhereUniqueInput
  }

  /**
   * destino deleteMany
   */
  export type destinoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which destinos to delete
     */
    where?: destinoWhereInput
    /**
     * Limit how many destinos to delete.
     */
    limit?: number
  }

  /**
   * destino without action
   */
  export type destinoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
  }


  /**
   * Model est_andamento
   */

  export type AggregateEst_andamento = {
    _count: Est_andamentoCountAggregateOutputType | null
    _avg: Est_andamentoAvgAggregateOutputType | null
    _sum: Est_andamentoSumAggregateOutputType | null
    _min: Est_andamentoMinAggregateOutputType | null
    _max: Est_andamentoMaxAggregateOutputType | null
  }

  export type Est_andamentoAvgAggregateOutputType = {
    id: number | null
  }

  export type Est_andamentoSumAggregateOutputType = {
    id: number | null
  }

  export type Est_andamentoMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type Est_andamentoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type Est_andamentoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type Est_andamentoAvgAggregateInputType = {
    id?: true
  }

  export type Est_andamentoSumAggregateInputType = {
    id?: true
  }

  export type Est_andamentoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type Est_andamentoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type Est_andamentoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type Est_andamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which est_andamento to aggregate.
     */
    where?: est_andamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of est_andamentos to fetch.
     */
    orderBy?: est_andamentoOrderByWithRelationInput | est_andamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: est_andamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` est_andamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` est_andamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned est_andamentos
    **/
    _count?: true | Est_andamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Est_andamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Est_andamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Est_andamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Est_andamentoMaxAggregateInputType
  }

  export type GetEst_andamentoAggregateType<T extends Est_andamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEst_andamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEst_andamento[P]>
      : GetScalarType<T[P], AggregateEst_andamento[P]>
  }




  export type est_andamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: est_andamentoWhereInput
    orderBy?: est_andamentoOrderByWithAggregationInput | est_andamentoOrderByWithAggregationInput[]
    by: Est_andamentoScalarFieldEnum[] | Est_andamentoScalarFieldEnum
    having?: est_andamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Est_andamentoCountAggregateInputType | true
    _avg?: Est_andamentoAvgAggregateInputType
    _sum?: Est_andamentoSumAggregateInputType
    _min?: Est_andamentoMinAggregateInputType
    _max?: Est_andamentoMaxAggregateInputType
  }

  export type Est_andamentoGroupByOutputType = {
    id: number
    nome: string
    _count: Est_andamentoCountAggregateOutputType | null
    _avg: Est_andamentoAvgAggregateOutputType | null
    _sum: Est_andamentoSumAggregateOutputType | null
    _min: Est_andamentoMinAggregateOutputType | null
    _max: Est_andamentoMaxAggregateOutputType | null
  }

  type GetEst_andamentoGroupByPayload<T extends est_andamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Est_andamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Est_andamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Est_andamentoGroupByOutputType[P]>
            : GetScalarType<T[P], Est_andamentoGroupByOutputType[P]>
        }
      >
    >


  export type est_andamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    est_andamento_pedido?: boolean | est_andamento$est_andamento_pedidoArgs<ExtArgs>
    _count?: boolean | Est_andamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["est_andamento"]>



  export type est_andamentoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type est_andamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["est_andamento"]>
  export type est_andamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    est_andamento_pedido?: boolean | est_andamento$est_andamento_pedidoArgs<ExtArgs>
    _count?: boolean | Est_andamentoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $est_andamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "est_andamento"
    objects: {
      est_andamento_pedido: Prisma.$est_andamento_pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["est_andamento"]>
    composites: {}
  }

  type est_andamentoGetPayload<S extends boolean | null | undefined | est_andamentoDefaultArgs> = $Result.GetResult<Prisma.$est_andamentoPayload, S>

  type est_andamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<est_andamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Est_andamentoCountAggregateInputType | true
    }

  export interface est_andamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['est_andamento'], meta: { name: 'est_andamento' } }
    /**
     * Find zero or one Est_andamento that matches the filter.
     * @param {est_andamentoFindUniqueArgs} args - Arguments to find a Est_andamento
     * @example
     * // Get one Est_andamento
     * const est_andamento = await prisma.est_andamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends est_andamentoFindUniqueArgs>(args: SelectSubset<T, est_andamentoFindUniqueArgs<ExtArgs>>): Prisma__est_andamentoClient<$Result.GetResult<Prisma.$est_andamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Est_andamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {est_andamentoFindUniqueOrThrowArgs} args - Arguments to find a Est_andamento
     * @example
     * // Get one Est_andamento
     * const est_andamento = await prisma.est_andamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends est_andamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, est_andamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__est_andamentoClient<$Result.GetResult<Prisma.$est_andamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Est_andamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamentoFindFirstArgs} args - Arguments to find a Est_andamento
     * @example
     * // Get one Est_andamento
     * const est_andamento = await prisma.est_andamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends est_andamentoFindFirstArgs>(args?: SelectSubset<T, est_andamentoFindFirstArgs<ExtArgs>>): Prisma__est_andamentoClient<$Result.GetResult<Prisma.$est_andamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Est_andamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamentoFindFirstOrThrowArgs} args - Arguments to find a Est_andamento
     * @example
     * // Get one Est_andamento
     * const est_andamento = await prisma.est_andamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends est_andamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, est_andamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__est_andamentoClient<$Result.GetResult<Prisma.$est_andamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Est_andamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Est_andamentos
     * const est_andamentos = await prisma.est_andamento.findMany()
     * 
     * // Get first 10 Est_andamentos
     * const est_andamentos = await prisma.est_andamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const est_andamentoWithIdOnly = await prisma.est_andamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends est_andamentoFindManyArgs>(args?: SelectSubset<T, est_andamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$est_andamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Est_andamento.
     * @param {est_andamentoCreateArgs} args - Arguments to create a Est_andamento.
     * @example
     * // Create one Est_andamento
     * const Est_andamento = await prisma.est_andamento.create({
     *   data: {
     *     // ... data to create a Est_andamento
     *   }
     * })
     * 
     */
    create<T extends est_andamentoCreateArgs>(args: SelectSubset<T, est_andamentoCreateArgs<ExtArgs>>): Prisma__est_andamentoClient<$Result.GetResult<Prisma.$est_andamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Est_andamentos.
     * @param {est_andamentoCreateManyArgs} args - Arguments to create many Est_andamentos.
     * @example
     * // Create many Est_andamentos
     * const est_andamento = await prisma.est_andamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends est_andamentoCreateManyArgs>(args?: SelectSubset<T, est_andamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Est_andamento.
     * @param {est_andamentoDeleteArgs} args - Arguments to delete one Est_andamento.
     * @example
     * // Delete one Est_andamento
     * const Est_andamento = await prisma.est_andamento.delete({
     *   where: {
     *     // ... filter to delete one Est_andamento
     *   }
     * })
     * 
     */
    delete<T extends est_andamentoDeleteArgs>(args: SelectSubset<T, est_andamentoDeleteArgs<ExtArgs>>): Prisma__est_andamentoClient<$Result.GetResult<Prisma.$est_andamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Est_andamento.
     * @param {est_andamentoUpdateArgs} args - Arguments to update one Est_andamento.
     * @example
     * // Update one Est_andamento
     * const est_andamento = await prisma.est_andamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends est_andamentoUpdateArgs>(args: SelectSubset<T, est_andamentoUpdateArgs<ExtArgs>>): Prisma__est_andamentoClient<$Result.GetResult<Prisma.$est_andamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Est_andamentos.
     * @param {est_andamentoDeleteManyArgs} args - Arguments to filter Est_andamentos to delete.
     * @example
     * // Delete a few Est_andamentos
     * const { count } = await prisma.est_andamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends est_andamentoDeleteManyArgs>(args?: SelectSubset<T, est_andamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Est_andamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Est_andamentos
     * const est_andamento = await prisma.est_andamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends est_andamentoUpdateManyArgs>(args: SelectSubset<T, est_andamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Est_andamento.
     * @param {est_andamentoUpsertArgs} args - Arguments to update or create a Est_andamento.
     * @example
     * // Update or create a Est_andamento
     * const est_andamento = await prisma.est_andamento.upsert({
     *   create: {
     *     // ... data to create a Est_andamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Est_andamento we want to update
     *   }
     * })
     */
    upsert<T extends est_andamentoUpsertArgs>(args: SelectSubset<T, est_andamentoUpsertArgs<ExtArgs>>): Prisma__est_andamentoClient<$Result.GetResult<Prisma.$est_andamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Est_andamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamentoCountArgs} args - Arguments to filter Est_andamentos to count.
     * @example
     * // Count the number of Est_andamentos
     * const count = await prisma.est_andamento.count({
     *   where: {
     *     // ... the filter for the Est_andamentos we want to count
     *   }
     * })
    **/
    count<T extends est_andamentoCountArgs>(
      args?: Subset<T, est_andamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Est_andamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Est_andamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Est_andamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Est_andamentoAggregateArgs>(args: Subset<T, Est_andamentoAggregateArgs>): Prisma.PrismaPromise<GetEst_andamentoAggregateType<T>>

    /**
     * Group by Est_andamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends est_andamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: est_andamentoGroupByArgs['orderBy'] }
        : { orderBy?: est_andamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, est_andamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEst_andamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the est_andamento model
   */
  readonly fields: est_andamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for est_andamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__est_andamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    est_andamento_pedido<T extends est_andamento$est_andamento_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, est_andamento$est_andamento_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the est_andamento model
   */
  interface est_andamentoFieldRefs {
    readonly id: FieldRef<"est_andamento", 'Int'>
    readonly nome: FieldRef<"est_andamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * est_andamento findUnique
   */
  export type est_andamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento
     */
    select?: est_andamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento
     */
    omit?: est_andamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamentoInclude<ExtArgs> | null
    /**
     * Filter, which est_andamento to fetch.
     */
    where: est_andamentoWhereUniqueInput
  }

  /**
   * est_andamento findUniqueOrThrow
   */
  export type est_andamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento
     */
    select?: est_andamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento
     */
    omit?: est_andamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamentoInclude<ExtArgs> | null
    /**
     * Filter, which est_andamento to fetch.
     */
    where: est_andamentoWhereUniqueInput
  }

  /**
   * est_andamento findFirst
   */
  export type est_andamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento
     */
    select?: est_andamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento
     */
    omit?: est_andamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamentoInclude<ExtArgs> | null
    /**
     * Filter, which est_andamento to fetch.
     */
    where?: est_andamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of est_andamentos to fetch.
     */
    orderBy?: est_andamentoOrderByWithRelationInput | est_andamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for est_andamentos.
     */
    cursor?: est_andamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` est_andamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` est_andamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of est_andamentos.
     */
    distinct?: Est_andamentoScalarFieldEnum | Est_andamentoScalarFieldEnum[]
  }

  /**
   * est_andamento findFirstOrThrow
   */
  export type est_andamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento
     */
    select?: est_andamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento
     */
    omit?: est_andamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamentoInclude<ExtArgs> | null
    /**
     * Filter, which est_andamento to fetch.
     */
    where?: est_andamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of est_andamentos to fetch.
     */
    orderBy?: est_andamentoOrderByWithRelationInput | est_andamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for est_andamentos.
     */
    cursor?: est_andamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` est_andamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` est_andamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of est_andamentos.
     */
    distinct?: Est_andamentoScalarFieldEnum | Est_andamentoScalarFieldEnum[]
  }

  /**
   * est_andamento findMany
   */
  export type est_andamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento
     */
    select?: est_andamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento
     */
    omit?: est_andamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamentoInclude<ExtArgs> | null
    /**
     * Filter, which est_andamentos to fetch.
     */
    where?: est_andamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of est_andamentos to fetch.
     */
    orderBy?: est_andamentoOrderByWithRelationInput | est_andamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing est_andamentos.
     */
    cursor?: est_andamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` est_andamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` est_andamentos.
     */
    skip?: number
    distinct?: Est_andamentoScalarFieldEnum | Est_andamentoScalarFieldEnum[]
  }

  /**
   * est_andamento create
   */
  export type est_andamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento
     */
    select?: est_andamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento
     */
    omit?: est_andamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a est_andamento.
     */
    data: XOR<est_andamentoCreateInput, est_andamentoUncheckedCreateInput>
  }

  /**
   * est_andamento createMany
   */
  export type est_andamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many est_andamentos.
     */
    data: est_andamentoCreateManyInput | est_andamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * est_andamento update
   */
  export type est_andamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento
     */
    select?: est_andamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento
     */
    omit?: est_andamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a est_andamento.
     */
    data: XOR<est_andamentoUpdateInput, est_andamentoUncheckedUpdateInput>
    /**
     * Choose, which est_andamento to update.
     */
    where: est_andamentoWhereUniqueInput
  }

  /**
   * est_andamento updateMany
   */
  export type est_andamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update est_andamentos.
     */
    data: XOR<est_andamentoUpdateManyMutationInput, est_andamentoUncheckedUpdateManyInput>
    /**
     * Filter which est_andamentos to update
     */
    where?: est_andamentoWhereInput
    /**
     * Limit how many est_andamentos to update.
     */
    limit?: number
  }

  /**
   * est_andamento upsert
   */
  export type est_andamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento
     */
    select?: est_andamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento
     */
    omit?: est_andamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the est_andamento to update in case it exists.
     */
    where: est_andamentoWhereUniqueInput
    /**
     * In case the est_andamento found by the `where` argument doesn't exist, create a new est_andamento with this data.
     */
    create: XOR<est_andamentoCreateInput, est_andamentoUncheckedCreateInput>
    /**
     * In case the est_andamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<est_andamentoUpdateInput, est_andamentoUncheckedUpdateInput>
  }

  /**
   * est_andamento delete
   */
  export type est_andamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento
     */
    select?: est_andamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento
     */
    omit?: est_andamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamentoInclude<ExtArgs> | null
    /**
     * Filter which est_andamento to delete.
     */
    where: est_andamentoWhereUniqueInput
  }

  /**
   * est_andamento deleteMany
   */
  export type est_andamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which est_andamentos to delete
     */
    where?: est_andamentoWhereInput
    /**
     * Limit how many est_andamentos to delete.
     */
    limit?: number
  }

  /**
   * est_andamento.est_andamento_pedido
   */
  export type est_andamento$est_andamento_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    where?: est_andamento_pedidoWhereInput
    orderBy?: est_andamento_pedidoOrderByWithRelationInput | est_andamento_pedidoOrderByWithRelationInput[]
    cursor?: est_andamento_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Est_andamento_pedidoScalarFieldEnum | Est_andamento_pedidoScalarFieldEnum[]
  }

  /**
   * est_andamento without action
   */
  export type est_andamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento
     */
    select?: est_andamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento
     */
    omit?: est_andamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamentoInclude<ExtArgs> | null
  }


  /**
   * Model est_andamento_pedido
   */

  export type AggregateEst_andamento_pedido = {
    _count: Est_andamento_pedidoCountAggregateOutputType | null
    _avg: Est_andamento_pedidoAvgAggregateOutputType | null
    _sum: Est_andamento_pedidoSumAggregateOutputType | null
    _min: Est_andamento_pedidoMinAggregateOutputType | null
    _max: Est_andamento_pedidoMaxAggregateOutputType | null
  }

  export type Est_andamento_pedidoAvgAggregateOutputType = {
    id_est_andamento: number | null
    id_pedido: number | null
    id_usuario_autor: number | null
  }

  export type Est_andamento_pedidoSumAggregateOutputType = {
    id_est_andamento: number | null
    id_pedido: number | null
    id_usuario_autor: number | null
  }

  export type Est_andamento_pedidoMinAggregateOutputType = {
    id_est_andamento: number | null
    id_pedido: number | null
    id_usuario_autor: number | null
    dthr_criacao: Date | null
  }

  export type Est_andamento_pedidoMaxAggregateOutputType = {
    id_est_andamento: number | null
    id_pedido: number | null
    id_usuario_autor: number | null
    dthr_criacao: Date | null
  }

  export type Est_andamento_pedidoCountAggregateOutputType = {
    id_est_andamento: number
    id_pedido: number
    id_usuario_autor: number
    dthr_criacao: number
    _all: number
  }


  export type Est_andamento_pedidoAvgAggregateInputType = {
    id_est_andamento?: true
    id_pedido?: true
    id_usuario_autor?: true
  }

  export type Est_andamento_pedidoSumAggregateInputType = {
    id_est_andamento?: true
    id_pedido?: true
    id_usuario_autor?: true
  }

  export type Est_andamento_pedidoMinAggregateInputType = {
    id_est_andamento?: true
    id_pedido?: true
    id_usuario_autor?: true
    dthr_criacao?: true
  }

  export type Est_andamento_pedidoMaxAggregateInputType = {
    id_est_andamento?: true
    id_pedido?: true
    id_usuario_autor?: true
    dthr_criacao?: true
  }

  export type Est_andamento_pedidoCountAggregateInputType = {
    id_est_andamento?: true
    id_pedido?: true
    id_usuario_autor?: true
    dthr_criacao?: true
    _all?: true
  }

  export type Est_andamento_pedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which est_andamento_pedido to aggregate.
     */
    where?: est_andamento_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of est_andamento_pedidos to fetch.
     */
    orderBy?: est_andamento_pedidoOrderByWithRelationInput | est_andamento_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: est_andamento_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` est_andamento_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` est_andamento_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned est_andamento_pedidos
    **/
    _count?: true | Est_andamento_pedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Est_andamento_pedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Est_andamento_pedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Est_andamento_pedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Est_andamento_pedidoMaxAggregateInputType
  }

  export type GetEst_andamento_pedidoAggregateType<T extends Est_andamento_pedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateEst_andamento_pedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEst_andamento_pedido[P]>
      : GetScalarType<T[P], AggregateEst_andamento_pedido[P]>
  }




  export type est_andamento_pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: est_andamento_pedidoWhereInput
    orderBy?: est_andamento_pedidoOrderByWithAggregationInput | est_andamento_pedidoOrderByWithAggregationInput[]
    by: Est_andamento_pedidoScalarFieldEnum[] | Est_andamento_pedidoScalarFieldEnum
    having?: est_andamento_pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Est_andamento_pedidoCountAggregateInputType | true
    _avg?: Est_andamento_pedidoAvgAggregateInputType
    _sum?: Est_andamento_pedidoSumAggregateInputType
    _min?: Est_andamento_pedidoMinAggregateInputType
    _max?: Est_andamento_pedidoMaxAggregateInputType
  }

  export type Est_andamento_pedidoGroupByOutputType = {
    id_est_andamento: number
    id_pedido: number
    id_usuario_autor: number
    dthr_criacao: Date
    _count: Est_andamento_pedidoCountAggregateOutputType | null
    _avg: Est_andamento_pedidoAvgAggregateOutputType | null
    _sum: Est_andamento_pedidoSumAggregateOutputType | null
    _min: Est_andamento_pedidoMinAggregateOutputType | null
    _max: Est_andamento_pedidoMaxAggregateOutputType | null
  }

  type GetEst_andamento_pedidoGroupByPayload<T extends est_andamento_pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Est_andamento_pedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Est_andamento_pedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Est_andamento_pedidoGroupByOutputType[P]>
            : GetScalarType<T[P], Est_andamento_pedidoGroupByOutputType[P]>
        }
      >
    >


  export type est_andamento_pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_est_andamento?: boolean
    id_pedido?: boolean
    id_usuario_autor?: boolean
    dthr_criacao?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    est_andamento?: boolean | est_andamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["est_andamento_pedido"]>



  export type est_andamento_pedidoSelectScalar = {
    id_est_andamento?: boolean
    id_pedido?: boolean
    id_usuario_autor?: boolean
    dthr_criacao?: boolean
  }

  export type est_andamento_pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_est_andamento" | "id_pedido" | "id_usuario_autor" | "dthr_criacao", ExtArgs["result"]["est_andamento_pedido"]>
  export type est_andamento_pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    est_andamento?: boolean | est_andamentoDefaultArgs<ExtArgs>
  }

  export type $est_andamento_pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "est_andamento_pedido"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      est_andamento: Prisma.$est_andamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_est_andamento: number
      id_pedido: number
      id_usuario_autor: number
      dthr_criacao: Date
    }, ExtArgs["result"]["est_andamento_pedido"]>
    composites: {}
  }

  type est_andamento_pedidoGetPayload<S extends boolean | null | undefined | est_andamento_pedidoDefaultArgs> = $Result.GetResult<Prisma.$est_andamento_pedidoPayload, S>

  type est_andamento_pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<est_andamento_pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Est_andamento_pedidoCountAggregateInputType | true
    }

  export interface est_andamento_pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['est_andamento_pedido'], meta: { name: 'est_andamento_pedido' } }
    /**
     * Find zero or one Est_andamento_pedido that matches the filter.
     * @param {est_andamento_pedidoFindUniqueArgs} args - Arguments to find a Est_andamento_pedido
     * @example
     * // Get one Est_andamento_pedido
     * const est_andamento_pedido = await prisma.est_andamento_pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends est_andamento_pedidoFindUniqueArgs>(args: SelectSubset<T, est_andamento_pedidoFindUniqueArgs<ExtArgs>>): Prisma__est_andamento_pedidoClient<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Est_andamento_pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {est_andamento_pedidoFindUniqueOrThrowArgs} args - Arguments to find a Est_andamento_pedido
     * @example
     * // Get one Est_andamento_pedido
     * const est_andamento_pedido = await prisma.est_andamento_pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends est_andamento_pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, est_andamento_pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__est_andamento_pedidoClient<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Est_andamento_pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamento_pedidoFindFirstArgs} args - Arguments to find a Est_andamento_pedido
     * @example
     * // Get one Est_andamento_pedido
     * const est_andamento_pedido = await prisma.est_andamento_pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends est_andamento_pedidoFindFirstArgs>(args?: SelectSubset<T, est_andamento_pedidoFindFirstArgs<ExtArgs>>): Prisma__est_andamento_pedidoClient<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Est_andamento_pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamento_pedidoFindFirstOrThrowArgs} args - Arguments to find a Est_andamento_pedido
     * @example
     * // Get one Est_andamento_pedido
     * const est_andamento_pedido = await prisma.est_andamento_pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends est_andamento_pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, est_andamento_pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__est_andamento_pedidoClient<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Est_andamento_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamento_pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Est_andamento_pedidos
     * const est_andamento_pedidos = await prisma.est_andamento_pedido.findMany()
     * 
     * // Get first 10 Est_andamento_pedidos
     * const est_andamento_pedidos = await prisma.est_andamento_pedido.findMany({ take: 10 })
     * 
     * // Only select the `id_est_andamento`
     * const est_andamento_pedidoWithId_est_andamentoOnly = await prisma.est_andamento_pedido.findMany({ select: { id_est_andamento: true } })
     * 
     */
    findMany<T extends est_andamento_pedidoFindManyArgs>(args?: SelectSubset<T, est_andamento_pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Est_andamento_pedido.
     * @param {est_andamento_pedidoCreateArgs} args - Arguments to create a Est_andamento_pedido.
     * @example
     * // Create one Est_andamento_pedido
     * const Est_andamento_pedido = await prisma.est_andamento_pedido.create({
     *   data: {
     *     // ... data to create a Est_andamento_pedido
     *   }
     * })
     * 
     */
    create<T extends est_andamento_pedidoCreateArgs>(args: SelectSubset<T, est_andamento_pedidoCreateArgs<ExtArgs>>): Prisma__est_andamento_pedidoClient<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Est_andamento_pedidos.
     * @param {est_andamento_pedidoCreateManyArgs} args - Arguments to create many Est_andamento_pedidos.
     * @example
     * // Create many Est_andamento_pedidos
     * const est_andamento_pedido = await prisma.est_andamento_pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends est_andamento_pedidoCreateManyArgs>(args?: SelectSubset<T, est_andamento_pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Est_andamento_pedido.
     * @param {est_andamento_pedidoDeleteArgs} args - Arguments to delete one Est_andamento_pedido.
     * @example
     * // Delete one Est_andamento_pedido
     * const Est_andamento_pedido = await prisma.est_andamento_pedido.delete({
     *   where: {
     *     // ... filter to delete one Est_andamento_pedido
     *   }
     * })
     * 
     */
    delete<T extends est_andamento_pedidoDeleteArgs>(args: SelectSubset<T, est_andamento_pedidoDeleteArgs<ExtArgs>>): Prisma__est_andamento_pedidoClient<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Est_andamento_pedido.
     * @param {est_andamento_pedidoUpdateArgs} args - Arguments to update one Est_andamento_pedido.
     * @example
     * // Update one Est_andamento_pedido
     * const est_andamento_pedido = await prisma.est_andamento_pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends est_andamento_pedidoUpdateArgs>(args: SelectSubset<T, est_andamento_pedidoUpdateArgs<ExtArgs>>): Prisma__est_andamento_pedidoClient<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Est_andamento_pedidos.
     * @param {est_andamento_pedidoDeleteManyArgs} args - Arguments to filter Est_andamento_pedidos to delete.
     * @example
     * // Delete a few Est_andamento_pedidos
     * const { count } = await prisma.est_andamento_pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends est_andamento_pedidoDeleteManyArgs>(args?: SelectSubset<T, est_andamento_pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Est_andamento_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamento_pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Est_andamento_pedidos
     * const est_andamento_pedido = await prisma.est_andamento_pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends est_andamento_pedidoUpdateManyArgs>(args: SelectSubset<T, est_andamento_pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Est_andamento_pedido.
     * @param {est_andamento_pedidoUpsertArgs} args - Arguments to update or create a Est_andamento_pedido.
     * @example
     * // Update or create a Est_andamento_pedido
     * const est_andamento_pedido = await prisma.est_andamento_pedido.upsert({
     *   create: {
     *     // ... data to create a Est_andamento_pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Est_andamento_pedido we want to update
     *   }
     * })
     */
    upsert<T extends est_andamento_pedidoUpsertArgs>(args: SelectSubset<T, est_andamento_pedidoUpsertArgs<ExtArgs>>): Prisma__est_andamento_pedidoClient<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Est_andamento_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamento_pedidoCountArgs} args - Arguments to filter Est_andamento_pedidos to count.
     * @example
     * // Count the number of Est_andamento_pedidos
     * const count = await prisma.est_andamento_pedido.count({
     *   where: {
     *     // ... the filter for the Est_andamento_pedidos we want to count
     *   }
     * })
    **/
    count<T extends est_andamento_pedidoCountArgs>(
      args?: Subset<T, est_andamento_pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Est_andamento_pedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Est_andamento_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Est_andamento_pedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Est_andamento_pedidoAggregateArgs>(args: Subset<T, Est_andamento_pedidoAggregateArgs>): Prisma.PrismaPromise<GetEst_andamento_pedidoAggregateType<T>>

    /**
     * Group by Est_andamento_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {est_andamento_pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends est_andamento_pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: est_andamento_pedidoGroupByArgs['orderBy'] }
        : { orderBy?: est_andamento_pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, est_andamento_pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEst_andamento_pedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the est_andamento_pedido model
   */
  readonly fields: est_andamento_pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for est_andamento_pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__est_andamento_pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    est_andamento<T extends est_andamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, est_andamentoDefaultArgs<ExtArgs>>): Prisma__est_andamentoClient<$Result.GetResult<Prisma.$est_andamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the est_andamento_pedido model
   */
  interface est_andamento_pedidoFieldRefs {
    readonly id_est_andamento: FieldRef<"est_andamento_pedido", 'Int'>
    readonly id_pedido: FieldRef<"est_andamento_pedido", 'Int'>
    readonly id_usuario_autor: FieldRef<"est_andamento_pedido", 'Int'>
    readonly dthr_criacao: FieldRef<"est_andamento_pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * est_andamento_pedido findUnique
   */
  export type est_andamento_pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which est_andamento_pedido to fetch.
     */
    where: est_andamento_pedidoWhereUniqueInput
  }

  /**
   * est_andamento_pedido findUniqueOrThrow
   */
  export type est_andamento_pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which est_andamento_pedido to fetch.
     */
    where: est_andamento_pedidoWhereUniqueInput
  }

  /**
   * est_andamento_pedido findFirst
   */
  export type est_andamento_pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which est_andamento_pedido to fetch.
     */
    where?: est_andamento_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of est_andamento_pedidos to fetch.
     */
    orderBy?: est_andamento_pedidoOrderByWithRelationInput | est_andamento_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for est_andamento_pedidos.
     */
    cursor?: est_andamento_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` est_andamento_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` est_andamento_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of est_andamento_pedidos.
     */
    distinct?: Est_andamento_pedidoScalarFieldEnum | Est_andamento_pedidoScalarFieldEnum[]
  }

  /**
   * est_andamento_pedido findFirstOrThrow
   */
  export type est_andamento_pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which est_andamento_pedido to fetch.
     */
    where?: est_andamento_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of est_andamento_pedidos to fetch.
     */
    orderBy?: est_andamento_pedidoOrderByWithRelationInput | est_andamento_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for est_andamento_pedidos.
     */
    cursor?: est_andamento_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` est_andamento_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` est_andamento_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of est_andamento_pedidos.
     */
    distinct?: Est_andamento_pedidoScalarFieldEnum | Est_andamento_pedidoScalarFieldEnum[]
  }

  /**
   * est_andamento_pedido findMany
   */
  export type est_andamento_pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which est_andamento_pedidos to fetch.
     */
    where?: est_andamento_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of est_andamento_pedidos to fetch.
     */
    orderBy?: est_andamento_pedidoOrderByWithRelationInput | est_andamento_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing est_andamento_pedidos.
     */
    cursor?: est_andamento_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` est_andamento_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` est_andamento_pedidos.
     */
    skip?: number
    distinct?: Est_andamento_pedidoScalarFieldEnum | Est_andamento_pedidoScalarFieldEnum[]
  }

  /**
   * est_andamento_pedido create
   */
  export type est_andamento_pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a est_andamento_pedido.
     */
    data: XOR<est_andamento_pedidoCreateInput, est_andamento_pedidoUncheckedCreateInput>
  }

  /**
   * est_andamento_pedido createMany
   */
  export type est_andamento_pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many est_andamento_pedidos.
     */
    data: est_andamento_pedidoCreateManyInput | est_andamento_pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * est_andamento_pedido update
   */
  export type est_andamento_pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a est_andamento_pedido.
     */
    data: XOR<est_andamento_pedidoUpdateInput, est_andamento_pedidoUncheckedUpdateInput>
    /**
     * Choose, which est_andamento_pedido to update.
     */
    where: est_andamento_pedidoWhereUniqueInput
  }

  /**
   * est_andamento_pedido updateMany
   */
  export type est_andamento_pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update est_andamento_pedidos.
     */
    data: XOR<est_andamento_pedidoUpdateManyMutationInput, est_andamento_pedidoUncheckedUpdateManyInput>
    /**
     * Filter which est_andamento_pedidos to update
     */
    where?: est_andamento_pedidoWhereInput
    /**
     * Limit how many est_andamento_pedidos to update.
     */
    limit?: number
  }

  /**
   * est_andamento_pedido upsert
   */
  export type est_andamento_pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the est_andamento_pedido to update in case it exists.
     */
    where: est_andamento_pedidoWhereUniqueInput
    /**
     * In case the est_andamento_pedido found by the `where` argument doesn't exist, create a new est_andamento_pedido with this data.
     */
    create: XOR<est_andamento_pedidoCreateInput, est_andamento_pedidoUncheckedCreateInput>
    /**
     * In case the est_andamento_pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<est_andamento_pedidoUpdateInput, est_andamento_pedidoUncheckedUpdateInput>
  }

  /**
   * est_andamento_pedido delete
   */
  export type est_andamento_pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    /**
     * Filter which est_andamento_pedido to delete.
     */
    where: est_andamento_pedidoWhereUniqueInput
  }

  /**
   * est_andamento_pedido deleteMany
   */
  export type est_andamento_pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which est_andamento_pedidos to delete
     */
    where?: est_andamento_pedidoWhereInput
    /**
     * Limit how many est_andamento_pedidos to delete.
     */
    limit?: number
  }

  /**
   * est_andamento_pedido without action
   */
  export type est_andamento_pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
  }


  /**
   * Model info_cancelamento
   */

  export type AggregateInfo_cancelamento = {
    _count: Info_cancelamentoCountAggregateOutputType | null
    _avg: Info_cancelamentoAvgAggregateOutputType | null
    _sum: Info_cancelamentoSumAggregateOutputType | null
    _min: Info_cancelamentoMinAggregateOutputType | null
    _max: Info_cancelamentoMaxAggregateOutputType | null
  }

  export type Info_cancelamentoAvgAggregateOutputType = {
    id_pedido: number | null
  }

  export type Info_cancelamentoSumAggregateOutputType = {
    id_pedido: number | null
  }

  export type Info_cancelamentoMinAggregateOutputType = {
    id_pedido: number | null
    justificativa: string | null
  }

  export type Info_cancelamentoMaxAggregateOutputType = {
    id_pedido: number | null
    justificativa: string | null
  }

  export type Info_cancelamentoCountAggregateOutputType = {
    id_pedido: number
    justificativa: number
    _all: number
  }


  export type Info_cancelamentoAvgAggregateInputType = {
    id_pedido?: true
  }

  export type Info_cancelamentoSumAggregateInputType = {
    id_pedido?: true
  }

  export type Info_cancelamentoMinAggregateInputType = {
    id_pedido?: true
    justificativa?: true
  }

  export type Info_cancelamentoMaxAggregateInputType = {
    id_pedido?: true
    justificativa?: true
  }

  export type Info_cancelamentoCountAggregateInputType = {
    id_pedido?: true
    justificativa?: true
    _all?: true
  }

  export type Info_cancelamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which info_cancelamento to aggregate.
     */
    where?: info_cancelamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_cancelamentos to fetch.
     */
    orderBy?: info_cancelamentoOrderByWithRelationInput | info_cancelamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: info_cancelamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_cancelamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_cancelamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned info_cancelamentos
    **/
    _count?: true | Info_cancelamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Info_cancelamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Info_cancelamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Info_cancelamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Info_cancelamentoMaxAggregateInputType
  }

  export type GetInfo_cancelamentoAggregateType<T extends Info_cancelamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateInfo_cancelamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfo_cancelamento[P]>
      : GetScalarType<T[P], AggregateInfo_cancelamento[P]>
  }




  export type info_cancelamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: info_cancelamentoWhereInput
    orderBy?: info_cancelamentoOrderByWithAggregationInput | info_cancelamentoOrderByWithAggregationInput[]
    by: Info_cancelamentoScalarFieldEnum[] | Info_cancelamentoScalarFieldEnum
    having?: info_cancelamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Info_cancelamentoCountAggregateInputType | true
    _avg?: Info_cancelamentoAvgAggregateInputType
    _sum?: Info_cancelamentoSumAggregateInputType
    _min?: Info_cancelamentoMinAggregateInputType
    _max?: Info_cancelamentoMaxAggregateInputType
  }

  export type Info_cancelamentoGroupByOutputType = {
    id_pedido: number
    justificativa: string
    _count: Info_cancelamentoCountAggregateOutputType | null
    _avg: Info_cancelamentoAvgAggregateOutputType | null
    _sum: Info_cancelamentoSumAggregateOutputType | null
    _min: Info_cancelamentoMinAggregateOutputType | null
    _max: Info_cancelamentoMaxAggregateOutputType | null
  }

  type GetInfo_cancelamentoGroupByPayload<T extends info_cancelamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Info_cancelamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Info_cancelamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Info_cancelamentoGroupByOutputType[P]>
            : GetScalarType<T[P], Info_cancelamentoGroupByOutputType[P]>
        }
      >
    >


  export type info_cancelamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    justificativa?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["info_cancelamento"]>



  export type info_cancelamentoSelectScalar = {
    id_pedido?: boolean
    justificativa?: boolean
  }

  export type info_cancelamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pedido" | "justificativa", ExtArgs["result"]["info_cancelamento"]>
  export type info_cancelamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }

  export type $info_cancelamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "info_cancelamento"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pedido: number
      justificativa: string
    }, ExtArgs["result"]["info_cancelamento"]>
    composites: {}
  }

  type info_cancelamentoGetPayload<S extends boolean | null | undefined | info_cancelamentoDefaultArgs> = $Result.GetResult<Prisma.$info_cancelamentoPayload, S>

  type info_cancelamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<info_cancelamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Info_cancelamentoCountAggregateInputType | true
    }

  export interface info_cancelamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['info_cancelamento'], meta: { name: 'info_cancelamento' } }
    /**
     * Find zero or one Info_cancelamento that matches the filter.
     * @param {info_cancelamentoFindUniqueArgs} args - Arguments to find a Info_cancelamento
     * @example
     * // Get one Info_cancelamento
     * const info_cancelamento = await prisma.info_cancelamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends info_cancelamentoFindUniqueArgs>(args: SelectSubset<T, info_cancelamentoFindUniqueArgs<ExtArgs>>): Prisma__info_cancelamentoClient<$Result.GetResult<Prisma.$info_cancelamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Info_cancelamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {info_cancelamentoFindUniqueOrThrowArgs} args - Arguments to find a Info_cancelamento
     * @example
     * // Get one Info_cancelamento
     * const info_cancelamento = await prisma.info_cancelamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends info_cancelamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, info_cancelamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__info_cancelamentoClient<$Result.GetResult<Prisma.$info_cancelamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Info_cancelamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_cancelamentoFindFirstArgs} args - Arguments to find a Info_cancelamento
     * @example
     * // Get one Info_cancelamento
     * const info_cancelamento = await prisma.info_cancelamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends info_cancelamentoFindFirstArgs>(args?: SelectSubset<T, info_cancelamentoFindFirstArgs<ExtArgs>>): Prisma__info_cancelamentoClient<$Result.GetResult<Prisma.$info_cancelamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Info_cancelamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_cancelamentoFindFirstOrThrowArgs} args - Arguments to find a Info_cancelamento
     * @example
     * // Get one Info_cancelamento
     * const info_cancelamento = await prisma.info_cancelamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends info_cancelamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, info_cancelamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__info_cancelamentoClient<$Result.GetResult<Prisma.$info_cancelamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Info_cancelamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_cancelamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Info_cancelamentos
     * const info_cancelamentos = await prisma.info_cancelamento.findMany()
     * 
     * // Get first 10 Info_cancelamentos
     * const info_cancelamentos = await prisma.info_cancelamento.findMany({ take: 10 })
     * 
     * // Only select the `id_pedido`
     * const info_cancelamentoWithId_pedidoOnly = await prisma.info_cancelamento.findMany({ select: { id_pedido: true } })
     * 
     */
    findMany<T extends info_cancelamentoFindManyArgs>(args?: SelectSubset<T, info_cancelamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$info_cancelamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Info_cancelamento.
     * @param {info_cancelamentoCreateArgs} args - Arguments to create a Info_cancelamento.
     * @example
     * // Create one Info_cancelamento
     * const Info_cancelamento = await prisma.info_cancelamento.create({
     *   data: {
     *     // ... data to create a Info_cancelamento
     *   }
     * })
     * 
     */
    create<T extends info_cancelamentoCreateArgs>(args: SelectSubset<T, info_cancelamentoCreateArgs<ExtArgs>>): Prisma__info_cancelamentoClient<$Result.GetResult<Prisma.$info_cancelamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Info_cancelamentos.
     * @param {info_cancelamentoCreateManyArgs} args - Arguments to create many Info_cancelamentos.
     * @example
     * // Create many Info_cancelamentos
     * const info_cancelamento = await prisma.info_cancelamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends info_cancelamentoCreateManyArgs>(args?: SelectSubset<T, info_cancelamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Info_cancelamento.
     * @param {info_cancelamentoDeleteArgs} args - Arguments to delete one Info_cancelamento.
     * @example
     * // Delete one Info_cancelamento
     * const Info_cancelamento = await prisma.info_cancelamento.delete({
     *   where: {
     *     // ... filter to delete one Info_cancelamento
     *   }
     * })
     * 
     */
    delete<T extends info_cancelamentoDeleteArgs>(args: SelectSubset<T, info_cancelamentoDeleteArgs<ExtArgs>>): Prisma__info_cancelamentoClient<$Result.GetResult<Prisma.$info_cancelamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Info_cancelamento.
     * @param {info_cancelamentoUpdateArgs} args - Arguments to update one Info_cancelamento.
     * @example
     * // Update one Info_cancelamento
     * const info_cancelamento = await prisma.info_cancelamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends info_cancelamentoUpdateArgs>(args: SelectSubset<T, info_cancelamentoUpdateArgs<ExtArgs>>): Prisma__info_cancelamentoClient<$Result.GetResult<Prisma.$info_cancelamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Info_cancelamentos.
     * @param {info_cancelamentoDeleteManyArgs} args - Arguments to filter Info_cancelamentos to delete.
     * @example
     * // Delete a few Info_cancelamentos
     * const { count } = await prisma.info_cancelamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends info_cancelamentoDeleteManyArgs>(args?: SelectSubset<T, info_cancelamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Info_cancelamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_cancelamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Info_cancelamentos
     * const info_cancelamento = await prisma.info_cancelamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends info_cancelamentoUpdateManyArgs>(args: SelectSubset<T, info_cancelamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Info_cancelamento.
     * @param {info_cancelamentoUpsertArgs} args - Arguments to update or create a Info_cancelamento.
     * @example
     * // Update or create a Info_cancelamento
     * const info_cancelamento = await prisma.info_cancelamento.upsert({
     *   create: {
     *     // ... data to create a Info_cancelamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Info_cancelamento we want to update
     *   }
     * })
     */
    upsert<T extends info_cancelamentoUpsertArgs>(args: SelectSubset<T, info_cancelamentoUpsertArgs<ExtArgs>>): Prisma__info_cancelamentoClient<$Result.GetResult<Prisma.$info_cancelamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Info_cancelamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_cancelamentoCountArgs} args - Arguments to filter Info_cancelamentos to count.
     * @example
     * // Count the number of Info_cancelamentos
     * const count = await prisma.info_cancelamento.count({
     *   where: {
     *     // ... the filter for the Info_cancelamentos we want to count
     *   }
     * })
    **/
    count<T extends info_cancelamentoCountArgs>(
      args?: Subset<T, info_cancelamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Info_cancelamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Info_cancelamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Info_cancelamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Info_cancelamentoAggregateArgs>(args: Subset<T, Info_cancelamentoAggregateArgs>): Prisma.PrismaPromise<GetInfo_cancelamentoAggregateType<T>>

    /**
     * Group by Info_cancelamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_cancelamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends info_cancelamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: info_cancelamentoGroupByArgs['orderBy'] }
        : { orderBy?: info_cancelamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, info_cancelamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfo_cancelamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the info_cancelamento model
   */
  readonly fields: info_cancelamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for info_cancelamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__info_cancelamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the info_cancelamento model
   */
  interface info_cancelamentoFieldRefs {
    readonly id_pedido: FieldRef<"info_cancelamento", 'Int'>
    readonly justificativa: FieldRef<"info_cancelamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * info_cancelamento findUnique
   */
  export type info_cancelamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
    /**
     * Filter, which info_cancelamento to fetch.
     */
    where: info_cancelamentoWhereUniqueInput
  }

  /**
   * info_cancelamento findUniqueOrThrow
   */
  export type info_cancelamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
    /**
     * Filter, which info_cancelamento to fetch.
     */
    where: info_cancelamentoWhereUniqueInput
  }

  /**
   * info_cancelamento findFirst
   */
  export type info_cancelamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
    /**
     * Filter, which info_cancelamento to fetch.
     */
    where?: info_cancelamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_cancelamentos to fetch.
     */
    orderBy?: info_cancelamentoOrderByWithRelationInput | info_cancelamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for info_cancelamentos.
     */
    cursor?: info_cancelamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_cancelamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_cancelamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of info_cancelamentos.
     */
    distinct?: Info_cancelamentoScalarFieldEnum | Info_cancelamentoScalarFieldEnum[]
  }

  /**
   * info_cancelamento findFirstOrThrow
   */
  export type info_cancelamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
    /**
     * Filter, which info_cancelamento to fetch.
     */
    where?: info_cancelamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_cancelamentos to fetch.
     */
    orderBy?: info_cancelamentoOrderByWithRelationInput | info_cancelamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for info_cancelamentos.
     */
    cursor?: info_cancelamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_cancelamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_cancelamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of info_cancelamentos.
     */
    distinct?: Info_cancelamentoScalarFieldEnum | Info_cancelamentoScalarFieldEnum[]
  }

  /**
   * info_cancelamento findMany
   */
  export type info_cancelamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
    /**
     * Filter, which info_cancelamentos to fetch.
     */
    where?: info_cancelamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_cancelamentos to fetch.
     */
    orderBy?: info_cancelamentoOrderByWithRelationInput | info_cancelamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing info_cancelamentos.
     */
    cursor?: info_cancelamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_cancelamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_cancelamentos.
     */
    skip?: number
    distinct?: Info_cancelamentoScalarFieldEnum | Info_cancelamentoScalarFieldEnum[]
  }

  /**
   * info_cancelamento create
   */
  export type info_cancelamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a info_cancelamento.
     */
    data: XOR<info_cancelamentoCreateInput, info_cancelamentoUncheckedCreateInput>
  }

  /**
   * info_cancelamento createMany
   */
  export type info_cancelamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many info_cancelamentos.
     */
    data: info_cancelamentoCreateManyInput | info_cancelamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * info_cancelamento update
   */
  export type info_cancelamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a info_cancelamento.
     */
    data: XOR<info_cancelamentoUpdateInput, info_cancelamentoUncheckedUpdateInput>
    /**
     * Choose, which info_cancelamento to update.
     */
    where: info_cancelamentoWhereUniqueInput
  }

  /**
   * info_cancelamento updateMany
   */
  export type info_cancelamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update info_cancelamentos.
     */
    data: XOR<info_cancelamentoUpdateManyMutationInput, info_cancelamentoUncheckedUpdateManyInput>
    /**
     * Filter which info_cancelamentos to update
     */
    where?: info_cancelamentoWhereInput
    /**
     * Limit how many info_cancelamentos to update.
     */
    limit?: number
  }

  /**
   * info_cancelamento upsert
   */
  export type info_cancelamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the info_cancelamento to update in case it exists.
     */
    where: info_cancelamentoWhereUniqueInput
    /**
     * In case the info_cancelamento found by the `where` argument doesn't exist, create a new info_cancelamento with this data.
     */
    create: XOR<info_cancelamentoCreateInput, info_cancelamentoUncheckedCreateInput>
    /**
     * In case the info_cancelamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<info_cancelamentoUpdateInput, info_cancelamentoUncheckedUpdateInput>
  }

  /**
   * info_cancelamento delete
   */
  export type info_cancelamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
    /**
     * Filter which info_cancelamento to delete.
     */
    where: info_cancelamentoWhereUniqueInput
  }

  /**
   * info_cancelamento deleteMany
   */
  export type info_cancelamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which info_cancelamentos to delete
     */
    where?: info_cancelamentoWhereInput
    /**
     * Limit how many info_cancelamentos to delete.
     */
    limit?: number
  }

  /**
   * info_cancelamento without action
   */
  export type info_cancelamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
  }


  /**
   * Model info_pagamento
   */

  export type AggregateInfo_pagamento = {
    _count: Info_pagamentoCountAggregateOutputType | null
    _avg: Info_pagamentoAvgAggregateOutputType | null
    _sum: Info_pagamentoSumAggregateOutputType | null
    _min: Info_pagamentoMinAggregateOutputType | null
    _max: Info_pagamentoMaxAggregateOutputType | null
  }

  export type Info_pagamentoAvgAggregateOutputType = {
    id_pedido: number | null
  }

  export type Info_pagamentoSumAggregateOutputType = {
    id_pedido: number | null
  }

  export type Info_pagamentoMinAggregateOutputType = {
    id_pedido: number | null
    dt_vencimento: Date | null
    dt_pago: Date | null
  }

  export type Info_pagamentoMaxAggregateOutputType = {
    id_pedido: number | null
    dt_vencimento: Date | null
    dt_pago: Date | null
  }

  export type Info_pagamentoCountAggregateOutputType = {
    id_pedido: number
    dt_vencimento: number
    dt_pago: number
    _all: number
  }


  export type Info_pagamentoAvgAggregateInputType = {
    id_pedido?: true
  }

  export type Info_pagamentoSumAggregateInputType = {
    id_pedido?: true
  }

  export type Info_pagamentoMinAggregateInputType = {
    id_pedido?: true
    dt_vencimento?: true
    dt_pago?: true
  }

  export type Info_pagamentoMaxAggregateInputType = {
    id_pedido?: true
    dt_vencimento?: true
    dt_pago?: true
  }

  export type Info_pagamentoCountAggregateInputType = {
    id_pedido?: true
    dt_vencimento?: true
    dt_pago?: true
    _all?: true
  }

  export type Info_pagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which info_pagamento to aggregate.
     */
    where?: info_pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pagamentos to fetch.
     */
    orderBy?: info_pagamentoOrderByWithRelationInput | info_pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: info_pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned info_pagamentos
    **/
    _count?: true | Info_pagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Info_pagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Info_pagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Info_pagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Info_pagamentoMaxAggregateInputType
  }

  export type GetInfo_pagamentoAggregateType<T extends Info_pagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateInfo_pagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfo_pagamento[P]>
      : GetScalarType<T[P], AggregateInfo_pagamento[P]>
  }




  export type info_pagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: info_pagamentoWhereInput
    orderBy?: info_pagamentoOrderByWithAggregationInput | info_pagamentoOrderByWithAggregationInput[]
    by: Info_pagamentoScalarFieldEnum[] | Info_pagamentoScalarFieldEnum
    having?: info_pagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Info_pagamentoCountAggregateInputType | true
    _avg?: Info_pagamentoAvgAggregateInputType
    _sum?: Info_pagamentoSumAggregateInputType
    _min?: Info_pagamentoMinAggregateInputType
    _max?: Info_pagamentoMaxAggregateInputType
  }

  export type Info_pagamentoGroupByOutputType = {
    id_pedido: number
    dt_vencimento: Date | null
    dt_pago: Date | null
    _count: Info_pagamentoCountAggregateOutputType | null
    _avg: Info_pagamentoAvgAggregateOutputType | null
    _sum: Info_pagamentoSumAggregateOutputType | null
    _min: Info_pagamentoMinAggregateOutputType | null
    _max: Info_pagamentoMaxAggregateOutputType | null
  }

  type GetInfo_pagamentoGroupByPayload<T extends info_pagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Info_pagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Info_pagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Info_pagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], Info_pagamentoGroupByOutputType[P]>
        }
      >
    >


  export type info_pagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    dt_vencimento?: boolean
    dt_pago?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["info_pagamento"]>



  export type info_pagamentoSelectScalar = {
    id_pedido?: boolean
    dt_vencimento?: boolean
    dt_pago?: boolean
  }

  export type info_pagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pedido" | "dt_vencimento" | "dt_pago", ExtArgs["result"]["info_pagamento"]>
  export type info_pagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }

  export type $info_pagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "info_pagamento"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pedido: number
      dt_vencimento: Date | null
      dt_pago: Date | null
    }, ExtArgs["result"]["info_pagamento"]>
    composites: {}
  }

  type info_pagamentoGetPayload<S extends boolean | null | undefined | info_pagamentoDefaultArgs> = $Result.GetResult<Prisma.$info_pagamentoPayload, S>

  type info_pagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<info_pagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Info_pagamentoCountAggregateInputType | true
    }

  export interface info_pagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['info_pagamento'], meta: { name: 'info_pagamento' } }
    /**
     * Find zero or one Info_pagamento that matches the filter.
     * @param {info_pagamentoFindUniqueArgs} args - Arguments to find a Info_pagamento
     * @example
     * // Get one Info_pagamento
     * const info_pagamento = await prisma.info_pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends info_pagamentoFindUniqueArgs>(args: SelectSubset<T, info_pagamentoFindUniqueArgs<ExtArgs>>): Prisma__info_pagamentoClient<$Result.GetResult<Prisma.$info_pagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Info_pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {info_pagamentoFindUniqueOrThrowArgs} args - Arguments to find a Info_pagamento
     * @example
     * // Get one Info_pagamento
     * const info_pagamento = await prisma.info_pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends info_pagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, info_pagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__info_pagamentoClient<$Result.GetResult<Prisma.$info_pagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Info_pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pagamentoFindFirstArgs} args - Arguments to find a Info_pagamento
     * @example
     * // Get one Info_pagamento
     * const info_pagamento = await prisma.info_pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends info_pagamentoFindFirstArgs>(args?: SelectSubset<T, info_pagamentoFindFirstArgs<ExtArgs>>): Prisma__info_pagamentoClient<$Result.GetResult<Prisma.$info_pagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Info_pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pagamentoFindFirstOrThrowArgs} args - Arguments to find a Info_pagamento
     * @example
     * // Get one Info_pagamento
     * const info_pagamento = await prisma.info_pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends info_pagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, info_pagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__info_pagamentoClient<$Result.GetResult<Prisma.$info_pagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Info_pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Info_pagamentos
     * const info_pagamentos = await prisma.info_pagamento.findMany()
     * 
     * // Get first 10 Info_pagamentos
     * const info_pagamentos = await prisma.info_pagamento.findMany({ take: 10 })
     * 
     * // Only select the `id_pedido`
     * const info_pagamentoWithId_pedidoOnly = await prisma.info_pagamento.findMany({ select: { id_pedido: true } })
     * 
     */
    findMany<T extends info_pagamentoFindManyArgs>(args?: SelectSubset<T, info_pagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$info_pagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Info_pagamento.
     * @param {info_pagamentoCreateArgs} args - Arguments to create a Info_pagamento.
     * @example
     * // Create one Info_pagamento
     * const Info_pagamento = await prisma.info_pagamento.create({
     *   data: {
     *     // ... data to create a Info_pagamento
     *   }
     * })
     * 
     */
    create<T extends info_pagamentoCreateArgs>(args: SelectSubset<T, info_pagamentoCreateArgs<ExtArgs>>): Prisma__info_pagamentoClient<$Result.GetResult<Prisma.$info_pagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Info_pagamentos.
     * @param {info_pagamentoCreateManyArgs} args - Arguments to create many Info_pagamentos.
     * @example
     * // Create many Info_pagamentos
     * const info_pagamento = await prisma.info_pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends info_pagamentoCreateManyArgs>(args?: SelectSubset<T, info_pagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Info_pagamento.
     * @param {info_pagamentoDeleteArgs} args - Arguments to delete one Info_pagamento.
     * @example
     * // Delete one Info_pagamento
     * const Info_pagamento = await prisma.info_pagamento.delete({
     *   where: {
     *     // ... filter to delete one Info_pagamento
     *   }
     * })
     * 
     */
    delete<T extends info_pagamentoDeleteArgs>(args: SelectSubset<T, info_pagamentoDeleteArgs<ExtArgs>>): Prisma__info_pagamentoClient<$Result.GetResult<Prisma.$info_pagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Info_pagamento.
     * @param {info_pagamentoUpdateArgs} args - Arguments to update one Info_pagamento.
     * @example
     * // Update one Info_pagamento
     * const info_pagamento = await prisma.info_pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends info_pagamentoUpdateArgs>(args: SelectSubset<T, info_pagamentoUpdateArgs<ExtArgs>>): Prisma__info_pagamentoClient<$Result.GetResult<Prisma.$info_pagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Info_pagamentos.
     * @param {info_pagamentoDeleteManyArgs} args - Arguments to filter Info_pagamentos to delete.
     * @example
     * // Delete a few Info_pagamentos
     * const { count } = await prisma.info_pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends info_pagamentoDeleteManyArgs>(args?: SelectSubset<T, info_pagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Info_pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Info_pagamentos
     * const info_pagamento = await prisma.info_pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends info_pagamentoUpdateManyArgs>(args: SelectSubset<T, info_pagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Info_pagamento.
     * @param {info_pagamentoUpsertArgs} args - Arguments to update or create a Info_pagamento.
     * @example
     * // Update or create a Info_pagamento
     * const info_pagamento = await prisma.info_pagamento.upsert({
     *   create: {
     *     // ... data to create a Info_pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Info_pagamento we want to update
     *   }
     * })
     */
    upsert<T extends info_pagamentoUpsertArgs>(args: SelectSubset<T, info_pagamentoUpsertArgs<ExtArgs>>): Prisma__info_pagamentoClient<$Result.GetResult<Prisma.$info_pagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Info_pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pagamentoCountArgs} args - Arguments to filter Info_pagamentos to count.
     * @example
     * // Count the number of Info_pagamentos
     * const count = await prisma.info_pagamento.count({
     *   where: {
     *     // ... the filter for the Info_pagamentos we want to count
     *   }
     * })
    **/
    count<T extends info_pagamentoCountArgs>(
      args?: Subset<T, info_pagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Info_pagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Info_pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Info_pagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Info_pagamentoAggregateArgs>(args: Subset<T, Info_pagamentoAggregateArgs>): Prisma.PrismaPromise<GetInfo_pagamentoAggregateType<T>>

    /**
     * Group by Info_pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pagamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends info_pagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: info_pagamentoGroupByArgs['orderBy'] }
        : { orderBy?: info_pagamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, info_pagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfo_pagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the info_pagamento model
   */
  readonly fields: info_pagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for info_pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__info_pagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the info_pagamento model
   */
  interface info_pagamentoFieldRefs {
    readonly id_pedido: FieldRef<"info_pagamento", 'Int'>
    readonly dt_vencimento: FieldRef<"info_pagamento", 'DateTime'>
    readonly dt_pago: FieldRef<"info_pagamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * info_pagamento findUnique
   */
  export type info_pagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which info_pagamento to fetch.
     */
    where: info_pagamentoWhereUniqueInput
  }

  /**
   * info_pagamento findUniqueOrThrow
   */
  export type info_pagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which info_pagamento to fetch.
     */
    where: info_pagamentoWhereUniqueInput
  }

  /**
   * info_pagamento findFirst
   */
  export type info_pagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which info_pagamento to fetch.
     */
    where?: info_pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pagamentos to fetch.
     */
    orderBy?: info_pagamentoOrderByWithRelationInput | info_pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for info_pagamentos.
     */
    cursor?: info_pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of info_pagamentos.
     */
    distinct?: Info_pagamentoScalarFieldEnum | Info_pagamentoScalarFieldEnum[]
  }

  /**
   * info_pagamento findFirstOrThrow
   */
  export type info_pagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which info_pagamento to fetch.
     */
    where?: info_pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pagamentos to fetch.
     */
    orderBy?: info_pagamentoOrderByWithRelationInput | info_pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for info_pagamentos.
     */
    cursor?: info_pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of info_pagamentos.
     */
    distinct?: Info_pagamentoScalarFieldEnum | Info_pagamentoScalarFieldEnum[]
  }

  /**
   * info_pagamento findMany
   */
  export type info_pagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which info_pagamentos to fetch.
     */
    where?: info_pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pagamentos to fetch.
     */
    orderBy?: info_pagamentoOrderByWithRelationInput | info_pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing info_pagamentos.
     */
    cursor?: info_pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pagamentos.
     */
    skip?: number
    distinct?: Info_pagamentoScalarFieldEnum | Info_pagamentoScalarFieldEnum[]
  }

  /**
   * info_pagamento create
   */
  export type info_pagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a info_pagamento.
     */
    data: XOR<info_pagamentoCreateInput, info_pagamentoUncheckedCreateInput>
  }

  /**
   * info_pagamento createMany
   */
  export type info_pagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many info_pagamentos.
     */
    data: info_pagamentoCreateManyInput | info_pagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * info_pagamento update
   */
  export type info_pagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a info_pagamento.
     */
    data: XOR<info_pagamentoUpdateInput, info_pagamentoUncheckedUpdateInput>
    /**
     * Choose, which info_pagamento to update.
     */
    where: info_pagamentoWhereUniqueInput
  }

  /**
   * info_pagamento updateMany
   */
  export type info_pagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update info_pagamentos.
     */
    data: XOR<info_pagamentoUpdateManyMutationInput, info_pagamentoUncheckedUpdateManyInput>
    /**
     * Filter which info_pagamentos to update
     */
    where?: info_pagamentoWhereInput
    /**
     * Limit how many info_pagamentos to update.
     */
    limit?: number
  }

  /**
   * info_pagamento upsert
   */
  export type info_pagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the info_pagamento to update in case it exists.
     */
    where: info_pagamentoWhereUniqueInput
    /**
     * In case the info_pagamento found by the `where` argument doesn't exist, create a new info_pagamento with this data.
     */
    create: XOR<info_pagamentoCreateInput, info_pagamentoUncheckedCreateInput>
    /**
     * In case the info_pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<info_pagamentoUpdateInput, info_pagamentoUncheckedUpdateInput>
  }

  /**
   * info_pagamento delete
   */
  export type info_pagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
    /**
     * Filter which info_pagamento to delete.
     */
    where: info_pagamentoWhereUniqueInput
  }

  /**
   * info_pagamento deleteMany
   */
  export type info_pagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which info_pagamentos to delete
     */
    where?: info_pagamentoWhereInput
    /**
     * Limit how many info_pagamentos to delete.
     */
    limit?: number
  }

  /**
   * info_pagamento without action
   */
  export type info_pagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
  }


  /**
   * Model info_pf
   */

  export type AggregateInfo_pf = {
    _count: Info_pfCountAggregateOutputType | null
    _avg: Info_pfAvgAggregateOutputType | null
    _sum: Info_pfSumAggregateOutputType | null
    _min: Info_pfMinAggregateOutputType | null
    _max: Info_pfMaxAggregateOutputType | null
  }

  export type Info_pfAvgAggregateOutputType = {
    id_pedido: number | null
  }

  export type Info_pfSumAggregateOutputType = {
    id_pedido: number | null
  }

  export type Info_pfMinAggregateOutputType = {
    id_pedido: number | null
    nome_cliente: string | null
    cpf: string | null
  }

  export type Info_pfMaxAggregateOutputType = {
    id_pedido: number | null
    nome_cliente: string | null
    cpf: string | null
  }

  export type Info_pfCountAggregateOutputType = {
    id_pedido: number
    nome_cliente: number
    cpf: number
    _all: number
  }


  export type Info_pfAvgAggregateInputType = {
    id_pedido?: true
  }

  export type Info_pfSumAggregateInputType = {
    id_pedido?: true
  }

  export type Info_pfMinAggregateInputType = {
    id_pedido?: true
    nome_cliente?: true
    cpf?: true
  }

  export type Info_pfMaxAggregateInputType = {
    id_pedido?: true
    nome_cliente?: true
    cpf?: true
  }

  export type Info_pfCountAggregateInputType = {
    id_pedido?: true
    nome_cliente?: true
    cpf?: true
    _all?: true
  }

  export type Info_pfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which info_pf to aggregate.
     */
    where?: info_pfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pfs to fetch.
     */
    orderBy?: info_pfOrderByWithRelationInput | info_pfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: info_pfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned info_pfs
    **/
    _count?: true | Info_pfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Info_pfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Info_pfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Info_pfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Info_pfMaxAggregateInputType
  }

  export type GetInfo_pfAggregateType<T extends Info_pfAggregateArgs> = {
        [P in keyof T & keyof AggregateInfo_pf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfo_pf[P]>
      : GetScalarType<T[P], AggregateInfo_pf[P]>
  }




  export type info_pfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: info_pfWhereInput
    orderBy?: info_pfOrderByWithAggregationInput | info_pfOrderByWithAggregationInput[]
    by: Info_pfScalarFieldEnum[] | Info_pfScalarFieldEnum
    having?: info_pfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Info_pfCountAggregateInputType | true
    _avg?: Info_pfAvgAggregateInputType
    _sum?: Info_pfSumAggregateInputType
    _min?: Info_pfMinAggregateInputType
    _max?: Info_pfMaxAggregateInputType
  }

  export type Info_pfGroupByOutputType = {
    id_pedido: number
    nome_cliente: string
    cpf: string
    _count: Info_pfCountAggregateOutputType | null
    _avg: Info_pfAvgAggregateOutputType | null
    _sum: Info_pfSumAggregateOutputType | null
    _min: Info_pfMinAggregateOutputType | null
    _max: Info_pfMaxAggregateOutputType | null
  }

  type GetInfo_pfGroupByPayload<T extends info_pfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Info_pfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Info_pfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Info_pfGroupByOutputType[P]>
            : GetScalarType<T[P], Info_pfGroupByOutputType[P]>
        }
      >
    >


  export type info_pfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    nome_cliente?: boolean
    cpf?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["info_pf"]>



  export type info_pfSelectScalar = {
    id_pedido?: boolean
    nome_cliente?: boolean
    cpf?: boolean
  }

  export type info_pfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pedido" | "nome_cliente" | "cpf", ExtArgs["result"]["info_pf"]>
  export type info_pfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }

  export type $info_pfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "info_pf"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pedido: number
      nome_cliente: string
      cpf: string
    }, ExtArgs["result"]["info_pf"]>
    composites: {}
  }

  type info_pfGetPayload<S extends boolean | null | undefined | info_pfDefaultArgs> = $Result.GetResult<Prisma.$info_pfPayload, S>

  type info_pfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<info_pfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Info_pfCountAggregateInputType | true
    }

  export interface info_pfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['info_pf'], meta: { name: 'info_pf' } }
    /**
     * Find zero or one Info_pf that matches the filter.
     * @param {info_pfFindUniqueArgs} args - Arguments to find a Info_pf
     * @example
     * // Get one Info_pf
     * const info_pf = await prisma.info_pf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends info_pfFindUniqueArgs>(args: SelectSubset<T, info_pfFindUniqueArgs<ExtArgs>>): Prisma__info_pfClient<$Result.GetResult<Prisma.$info_pfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Info_pf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {info_pfFindUniqueOrThrowArgs} args - Arguments to find a Info_pf
     * @example
     * // Get one Info_pf
     * const info_pf = await prisma.info_pf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends info_pfFindUniqueOrThrowArgs>(args: SelectSubset<T, info_pfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__info_pfClient<$Result.GetResult<Prisma.$info_pfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Info_pf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pfFindFirstArgs} args - Arguments to find a Info_pf
     * @example
     * // Get one Info_pf
     * const info_pf = await prisma.info_pf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends info_pfFindFirstArgs>(args?: SelectSubset<T, info_pfFindFirstArgs<ExtArgs>>): Prisma__info_pfClient<$Result.GetResult<Prisma.$info_pfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Info_pf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pfFindFirstOrThrowArgs} args - Arguments to find a Info_pf
     * @example
     * // Get one Info_pf
     * const info_pf = await prisma.info_pf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends info_pfFindFirstOrThrowArgs>(args?: SelectSubset<T, info_pfFindFirstOrThrowArgs<ExtArgs>>): Prisma__info_pfClient<$Result.GetResult<Prisma.$info_pfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Info_pfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Info_pfs
     * const info_pfs = await prisma.info_pf.findMany()
     * 
     * // Get first 10 Info_pfs
     * const info_pfs = await prisma.info_pf.findMany({ take: 10 })
     * 
     * // Only select the `id_pedido`
     * const info_pfWithId_pedidoOnly = await prisma.info_pf.findMany({ select: { id_pedido: true } })
     * 
     */
    findMany<T extends info_pfFindManyArgs>(args?: SelectSubset<T, info_pfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$info_pfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Info_pf.
     * @param {info_pfCreateArgs} args - Arguments to create a Info_pf.
     * @example
     * // Create one Info_pf
     * const Info_pf = await prisma.info_pf.create({
     *   data: {
     *     // ... data to create a Info_pf
     *   }
     * })
     * 
     */
    create<T extends info_pfCreateArgs>(args: SelectSubset<T, info_pfCreateArgs<ExtArgs>>): Prisma__info_pfClient<$Result.GetResult<Prisma.$info_pfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Info_pfs.
     * @param {info_pfCreateManyArgs} args - Arguments to create many Info_pfs.
     * @example
     * // Create many Info_pfs
     * const info_pf = await prisma.info_pf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends info_pfCreateManyArgs>(args?: SelectSubset<T, info_pfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Info_pf.
     * @param {info_pfDeleteArgs} args - Arguments to delete one Info_pf.
     * @example
     * // Delete one Info_pf
     * const Info_pf = await prisma.info_pf.delete({
     *   where: {
     *     // ... filter to delete one Info_pf
     *   }
     * })
     * 
     */
    delete<T extends info_pfDeleteArgs>(args: SelectSubset<T, info_pfDeleteArgs<ExtArgs>>): Prisma__info_pfClient<$Result.GetResult<Prisma.$info_pfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Info_pf.
     * @param {info_pfUpdateArgs} args - Arguments to update one Info_pf.
     * @example
     * // Update one Info_pf
     * const info_pf = await prisma.info_pf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends info_pfUpdateArgs>(args: SelectSubset<T, info_pfUpdateArgs<ExtArgs>>): Prisma__info_pfClient<$Result.GetResult<Prisma.$info_pfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Info_pfs.
     * @param {info_pfDeleteManyArgs} args - Arguments to filter Info_pfs to delete.
     * @example
     * // Delete a few Info_pfs
     * const { count } = await prisma.info_pf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends info_pfDeleteManyArgs>(args?: SelectSubset<T, info_pfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Info_pfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Info_pfs
     * const info_pf = await prisma.info_pf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends info_pfUpdateManyArgs>(args: SelectSubset<T, info_pfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Info_pf.
     * @param {info_pfUpsertArgs} args - Arguments to update or create a Info_pf.
     * @example
     * // Update or create a Info_pf
     * const info_pf = await prisma.info_pf.upsert({
     *   create: {
     *     // ... data to create a Info_pf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Info_pf we want to update
     *   }
     * })
     */
    upsert<T extends info_pfUpsertArgs>(args: SelectSubset<T, info_pfUpsertArgs<ExtArgs>>): Prisma__info_pfClient<$Result.GetResult<Prisma.$info_pfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Info_pfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pfCountArgs} args - Arguments to filter Info_pfs to count.
     * @example
     * // Count the number of Info_pfs
     * const count = await prisma.info_pf.count({
     *   where: {
     *     // ... the filter for the Info_pfs we want to count
     *   }
     * })
    **/
    count<T extends info_pfCountArgs>(
      args?: Subset<T, info_pfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Info_pfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Info_pf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Info_pfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Info_pfAggregateArgs>(args: Subset<T, Info_pfAggregateArgs>): Prisma.PrismaPromise<GetInfo_pfAggregateType<T>>

    /**
     * Group by Info_pf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends info_pfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: info_pfGroupByArgs['orderBy'] }
        : { orderBy?: info_pfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, info_pfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfo_pfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the info_pf model
   */
  readonly fields: info_pfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for info_pf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__info_pfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the info_pf model
   */
  interface info_pfFieldRefs {
    readonly id_pedido: FieldRef<"info_pf", 'Int'>
    readonly nome_cliente: FieldRef<"info_pf", 'String'>
    readonly cpf: FieldRef<"info_pf", 'String'>
  }
    

  // Custom InputTypes
  /**
   * info_pf findUnique
   */
  export type info_pfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
    /**
     * Filter, which info_pf to fetch.
     */
    where: info_pfWhereUniqueInput
  }

  /**
   * info_pf findUniqueOrThrow
   */
  export type info_pfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
    /**
     * Filter, which info_pf to fetch.
     */
    where: info_pfWhereUniqueInput
  }

  /**
   * info_pf findFirst
   */
  export type info_pfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
    /**
     * Filter, which info_pf to fetch.
     */
    where?: info_pfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pfs to fetch.
     */
    orderBy?: info_pfOrderByWithRelationInput | info_pfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for info_pfs.
     */
    cursor?: info_pfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of info_pfs.
     */
    distinct?: Info_pfScalarFieldEnum | Info_pfScalarFieldEnum[]
  }

  /**
   * info_pf findFirstOrThrow
   */
  export type info_pfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
    /**
     * Filter, which info_pf to fetch.
     */
    where?: info_pfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pfs to fetch.
     */
    orderBy?: info_pfOrderByWithRelationInput | info_pfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for info_pfs.
     */
    cursor?: info_pfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of info_pfs.
     */
    distinct?: Info_pfScalarFieldEnum | Info_pfScalarFieldEnum[]
  }

  /**
   * info_pf findMany
   */
  export type info_pfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
    /**
     * Filter, which info_pfs to fetch.
     */
    where?: info_pfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pfs to fetch.
     */
    orderBy?: info_pfOrderByWithRelationInput | info_pfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing info_pfs.
     */
    cursor?: info_pfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pfs.
     */
    skip?: number
    distinct?: Info_pfScalarFieldEnum | Info_pfScalarFieldEnum[]
  }

  /**
   * info_pf create
   */
  export type info_pfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
    /**
     * The data needed to create a info_pf.
     */
    data: XOR<info_pfCreateInput, info_pfUncheckedCreateInput>
  }

  /**
   * info_pf createMany
   */
  export type info_pfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many info_pfs.
     */
    data: info_pfCreateManyInput | info_pfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * info_pf update
   */
  export type info_pfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
    /**
     * The data needed to update a info_pf.
     */
    data: XOR<info_pfUpdateInput, info_pfUncheckedUpdateInput>
    /**
     * Choose, which info_pf to update.
     */
    where: info_pfWhereUniqueInput
  }

  /**
   * info_pf updateMany
   */
  export type info_pfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update info_pfs.
     */
    data: XOR<info_pfUpdateManyMutationInput, info_pfUncheckedUpdateManyInput>
    /**
     * Filter which info_pfs to update
     */
    where?: info_pfWhereInput
    /**
     * Limit how many info_pfs to update.
     */
    limit?: number
  }

  /**
   * info_pf upsert
   */
  export type info_pfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
    /**
     * The filter to search for the info_pf to update in case it exists.
     */
    where: info_pfWhereUniqueInput
    /**
     * In case the info_pf found by the `where` argument doesn't exist, create a new info_pf with this data.
     */
    create: XOR<info_pfCreateInput, info_pfUncheckedCreateInput>
    /**
     * In case the info_pf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<info_pfUpdateInput, info_pfUncheckedUpdateInput>
  }

  /**
   * info_pf delete
   */
  export type info_pfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
    /**
     * Filter which info_pf to delete.
     */
    where: info_pfWhereUniqueInput
  }

  /**
   * info_pf deleteMany
   */
  export type info_pfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which info_pfs to delete
     */
    where?: info_pfWhereInput
    /**
     * Limit how many info_pfs to delete.
     */
    limit?: number
  }

  /**
   * info_pf without action
   */
  export type info_pfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
  }


  /**
   * Model info_pj
   */

  export type AggregateInfo_pj = {
    _count: Info_pjCountAggregateOutputType | null
    _avg: Info_pjAvgAggregateOutputType | null
    _sum: Info_pjSumAggregateOutputType | null
    _min: Info_pjMinAggregateOutputType | null
    _max: Info_pjMaxAggregateOutputType | null
  }

  export type Info_pjAvgAggregateOutputType = {
    id_pedido: number | null
  }

  export type Info_pjSumAggregateOutputType = {
    id_pedido: number | null
  }

  export type Info_pjMinAggregateOutputType = {
    id_pedido: number | null
    cnpj: string | null
    nome_fantasia: string | null
    nome_empresarial: string | null
  }

  export type Info_pjMaxAggregateOutputType = {
    id_pedido: number | null
    cnpj: string | null
    nome_fantasia: string | null
    nome_empresarial: string | null
  }

  export type Info_pjCountAggregateOutputType = {
    id_pedido: number
    cnpj: number
    nome_fantasia: number
    nome_empresarial: number
    _all: number
  }


  export type Info_pjAvgAggregateInputType = {
    id_pedido?: true
  }

  export type Info_pjSumAggregateInputType = {
    id_pedido?: true
  }

  export type Info_pjMinAggregateInputType = {
    id_pedido?: true
    cnpj?: true
    nome_fantasia?: true
    nome_empresarial?: true
  }

  export type Info_pjMaxAggregateInputType = {
    id_pedido?: true
    cnpj?: true
    nome_fantasia?: true
    nome_empresarial?: true
  }

  export type Info_pjCountAggregateInputType = {
    id_pedido?: true
    cnpj?: true
    nome_fantasia?: true
    nome_empresarial?: true
    _all?: true
  }

  export type Info_pjAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which info_pj to aggregate.
     */
    where?: info_pjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pjs to fetch.
     */
    orderBy?: info_pjOrderByWithRelationInput | info_pjOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: info_pjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned info_pjs
    **/
    _count?: true | Info_pjCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Info_pjAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Info_pjSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Info_pjMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Info_pjMaxAggregateInputType
  }

  export type GetInfo_pjAggregateType<T extends Info_pjAggregateArgs> = {
        [P in keyof T & keyof AggregateInfo_pj]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfo_pj[P]>
      : GetScalarType<T[P], AggregateInfo_pj[P]>
  }




  export type info_pjGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: info_pjWhereInput
    orderBy?: info_pjOrderByWithAggregationInput | info_pjOrderByWithAggregationInput[]
    by: Info_pjScalarFieldEnum[] | Info_pjScalarFieldEnum
    having?: info_pjScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Info_pjCountAggregateInputType | true
    _avg?: Info_pjAvgAggregateInputType
    _sum?: Info_pjSumAggregateInputType
    _min?: Info_pjMinAggregateInputType
    _max?: Info_pjMaxAggregateInputType
  }

  export type Info_pjGroupByOutputType = {
    id_pedido: number
    cnpj: string
    nome_fantasia: string
    nome_empresarial: string
    _count: Info_pjCountAggregateOutputType | null
    _avg: Info_pjAvgAggregateOutputType | null
    _sum: Info_pjSumAggregateOutputType | null
    _min: Info_pjMinAggregateOutputType | null
    _max: Info_pjMaxAggregateOutputType | null
  }

  type GetInfo_pjGroupByPayload<T extends info_pjGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Info_pjGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Info_pjGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Info_pjGroupByOutputType[P]>
            : GetScalarType<T[P], Info_pjGroupByOutputType[P]>
        }
      >
    >


  export type info_pjSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    cnpj?: boolean
    nome_fantasia?: boolean
    nome_empresarial?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["info_pj"]>



  export type info_pjSelectScalar = {
    id_pedido?: boolean
    cnpj?: boolean
    nome_fantasia?: boolean
    nome_empresarial?: boolean
  }

  export type info_pjOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pedido" | "cnpj" | "nome_fantasia" | "nome_empresarial", ExtArgs["result"]["info_pj"]>
  export type info_pjInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }

  export type $info_pjPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "info_pj"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pedido: number
      cnpj: string
      nome_fantasia: string
      nome_empresarial: string
    }, ExtArgs["result"]["info_pj"]>
    composites: {}
  }

  type info_pjGetPayload<S extends boolean | null | undefined | info_pjDefaultArgs> = $Result.GetResult<Prisma.$info_pjPayload, S>

  type info_pjCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<info_pjFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Info_pjCountAggregateInputType | true
    }

  export interface info_pjDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['info_pj'], meta: { name: 'info_pj' } }
    /**
     * Find zero or one Info_pj that matches the filter.
     * @param {info_pjFindUniqueArgs} args - Arguments to find a Info_pj
     * @example
     * // Get one Info_pj
     * const info_pj = await prisma.info_pj.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends info_pjFindUniqueArgs>(args: SelectSubset<T, info_pjFindUniqueArgs<ExtArgs>>): Prisma__info_pjClient<$Result.GetResult<Prisma.$info_pjPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Info_pj that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {info_pjFindUniqueOrThrowArgs} args - Arguments to find a Info_pj
     * @example
     * // Get one Info_pj
     * const info_pj = await prisma.info_pj.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends info_pjFindUniqueOrThrowArgs>(args: SelectSubset<T, info_pjFindUniqueOrThrowArgs<ExtArgs>>): Prisma__info_pjClient<$Result.GetResult<Prisma.$info_pjPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Info_pj that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pjFindFirstArgs} args - Arguments to find a Info_pj
     * @example
     * // Get one Info_pj
     * const info_pj = await prisma.info_pj.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends info_pjFindFirstArgs>(args?: SelectSubset<T, info_pjFindFirstArgs<ExtArgs>>): Prisma__info_pjClient<$Result.GetResult<Prisma.$info_pjPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Info_pj that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pjFindFirstOrThrowArgs} args - Arguments to find a Info_pj
     * @example
     * // Get one Info_pj
     * const info_pj = await prisma.info_pj.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends info_pjFindFirstOrThrowArgs>(args?: SelectSubset<T, info_pjFindFirstOrThrowArgs<ExtArgs>>): Prisma__info_pjClient<$Result.GetResult<Prisma.$info_pjPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Info_pjs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pjFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Info_pjs
     * const info_pjs = await prisma.info_pj.findMany()
     * 
     * // Get first 10 Info_pjs
     * const info_pjs = await prisma.info_pj.findMany({ take: 10 })
     * 
     * // Only select the `id_pedido`
     * const info_pjWithId_pedidoOnly = await prisma.info_pj.findMany({ select: { id_pedido: true } })
     * 
     */
    findMany<T extends info_pjFindManyArgs>(args?: SelectSubset<T, info_pjFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$info_pjPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Info_pj.
     * @param {info_pjCreateArgs} args - Arguments to create a Info_pj.
     * @example
     * // Create one Info_pj
     * const Info_pj = await prisma.info_pj.create({
     *   data: {
     *     // ... data to create a Info_pj
     *   }
     * })
     * 
     */
    create<T extends info_pjCreateArgs>(args: SelectSubset<T, info_pjCreateArgs<ExtArgs>>): Prisma__info_pjClient<$Result.GetResult<Prisma.$info_pjPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Info_pjs.
     * @param {info_pjCreateManyArgs} args - Arguments to create many Info_pjs.
     * @example
     * // Create many Info_pjs
     * const info_pj = await prisma.info_pj.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends info_pjCreateManyArgs>(args?: SelectSubset<T, info_pjCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Info_pj.
     * @param {info_pjDeleteArgs} args - Arguments to delete one Info_pj.
     * @example
     * // Delete one Info_pj
     * const Info_pj = await prisma.info_pj.delete({
     *   where: {
     *     // ... filter to delete one Info_pj
     *   }
     * })
     * 
     */
    delete<T extends info_pjDeleteArgs>(args: SelectSubset<T, info_pjDeleteArgs<ExtArgs>>): Prisma__info_pjClient<$Result.GetResult<Prisma.$info_pjPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Info_pj.
     * @param {info_pjUpdateArgs} args - Arguments to update one Info_pj.
     * @example
     * // Update one Info_pj
     * const info_pj = await prisma.info_pj.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends info_pjUpdateArgs>(args: SelectSubset<T, info_pjUpdateArgs<ExtArgs>>): Prisma__info_pjClient<$Result.GetResult<Prisma.$info_pjPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Info_pjs.
     * @param {info_pjDeleteManyArgs} args - Arguments to filter Info_pjs to delete.
     * @example
     * // Delete a few Info_pjs
     * const { count } = await prisma.info_pj.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends info_pjDeleteManyArgs>(args?: SelectSubset<T, info_pjDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Info_pjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pjUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Info_pjs
     * const info_pj = await prisma.info_pj.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends info_pjUpdateManyArgs>(args: SelectSubset<T, info_pjUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Info_pj.
     * @param {info_pjUpsertArgs} args - Arguments to update or create a Info_pj.
     * @example
     * // Update or create a Info_pj
     * const info_pj = await prisma.info_pj.upsert({
     *   create: {
     *     // ... data to create a Info_pj
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Info_pj we want to update
     *   }
     * })
     */
    upsert<T extends info_pjUpsertArgs>(args: SelectSubset<T, info_pjUpsertArgs<ExtArgs>>): Prisma__info_pjClient<$Result.GetResult<Prisma.$info_pjPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Info_pjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pjCountArgs} args - Arguments to filter Info_pjs to count.
     * @example
     * // Count the number of Info_pjs
     * const count = await prisma.info_pj.count({
     *   where: {
     *     // ... the filter for the Info_pjs we want to count
     *   }
     * })
    **/
    count<T extends info_pjCountArgs>(
      args?: Subset<T, info_pjCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Info_pjCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Info_pj.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Info_pjAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Info_pjAggregateArgs>(args: Subset<T, Info_pjAggregateArgs>): Prisma.PrismaPromise<GetInfo_pjAggregateType<T>>

    /**
     * Group by Info_pj.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {info_pjGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends info_pjGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: info_pjGroupByArgs['orderBy'] }
        : { orderBy?: info_pjGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, info_pjGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfo_pjGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the info_pj model
   */
  readonly fields: info_pjFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for info_pj.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__info_pjClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the info_pj model
   */
  interface info_pjFieldRefs {
    readonly id_pedido: FieldRef<"info_pj", 'Int'>
    readonly cnpj: FieldRef<"info_pj", 'String'>
    readonly nome_fantasia: FieldRef<"info_pj", 'String'>
    readonly nome_empresarial: FieldRef<"info_pj", 'String'>
  }
    

  // Custom InputTypes
  /**
   * info_pj findUnique
   */
  export type info_pjFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
    /**
     * Filter, which info_pj to fetch.
     */
    where: info_pjWhereUniqueInput
  }

  /**
   * info_pj findUniqueOrThrow
   */
  export type info_pjFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
    /**
     * Filter, which info_pj to fetch.
     */
    where: info_pjWhereUniqueInput
  }

  /**
   * info_pj findFirst
   */
  export type info_pjFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
    /**
     * Filter, which info_pj to fetch.
     */
    where?: info_pjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pjs to fetch.
     */
    orderBy?: info_pjOrderByWithRelationInput | info_pjOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for info_pjs.
     */
    cursor?: info_pjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of info_pjs.
     */
    distinct?: Info_pjScalarFieldEnum | Info_pjScalarFieldEnum[]
  }

  /**
   * info_pj findFirstOrThrow
   */
  export type info_pjFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
    /**
     * Filter, which info_pj to fetch.
     */
    where?: info_pjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pjs to fetch.
     */
    orderBy?: info_pjOrderByWithRelationInput | info_pjOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for info_pjs.
     */
    cursor?: info_pjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of info_pjs.
     */
    distinct?: Info_pjScalarFieldEnum | Info_pjScalarFieldEnum[]
  }

  /**
   * info_pj findMany
   */
  export type info_pjFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
    /**
     * Filter, which info_pjs to fetch.
     */
    where?: info_pjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of info_pjs to fetch.
     */
    orderBy?: info_pjOrderByWithRelationInput | info_pjOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing info_pjs.
     */
    cursor?: info_pjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` info_pjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` info_pjs.
     */
    skip?: number
    distinct?: Info_pjScalarFieldEnum | Info_pjScalarFieldEnum[]
  }

  /**
   * info_pj create
   */
  export type info_pjCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
    /**
     * The data needed to create a info_pj.
     */
    data: XOR<info_pjCreateInput, info_pjUncheckedCreateInput>
  }

  /**
   * info_pj createMany
   */
  export type info_pjCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many info_pjs.
     */
    data: info_pjCreateManyInput | info_pjCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * info_pj update
   */
  export type info_pjUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
    /**
     * The data needed to update a info_pj.
     */
    data: XOR<info_pjUpdateInput, info_pjUncheckedUpdateInput>
    /**
     * Choose, which info_pj to update.
     */
    where: info_pjWhereUniqueInput
  }

  /**
   * info_pj updateMany
   */
  export type info_pjUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update info_pjs.
     */
    data: XOR<info_pjUpdateManyMutationInput, info_pjUncheckedUpdateManyInput>
    /**
     * Filter which info_pjs to update
     */
    where?: info_pjWhereInput
    /**
     * Limit how many info_pjs to update.
     */
    limit?: number
  }

  /**
   * info_pj upsert
   */
  export type info_pjUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
    /**
     * The filter to search for the info_pj to update in case it exists.
     */
    where: info_pjWhereUniqueInput
    /**
     * In case the info_pj found by the `where` argument doesn't exist, create a new info_pj with this data.
     */
    create: XOR<info_pjCreateInput, info_pjUncheckedCreateInput>
    /**
     * In case the info_pj was found with the provided `where` argument, update it with this data.
     */
    update: XOR<info_pjUpdateInput, info_pjUncheckedUpdateInput>
  }

  /**
   * info_pj delete
   */
  export type info_pjDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
    /**
     * Filter which info_pj to delete.
     */
    where: info_pjWhereUniqueInput
  }

  /**
   * info_pj deleteMany
   */
  export type info_pjDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which info_pjs to delete
     */
    where?: info_pjWhereInput
    /**
     * Limit how many info_pjs to delete.
     */
    limit?: number
  }

  /**
   * info_pj without action
   */
  export type info_pjDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
  }


  /**
   * Model intercorrencia
   */

  export type AggregateIntercorrencia = {
    _count: IntercorrenciaCountAggregateOutputType | null
    _avg: IntercorrenciaAvgAggregateOutputType | null
    _sum: IntercorrenciaSumAggregateOutputType | null
    _min: IntercorrenciaMinAggregateOutputType | null
    _max: IntercorrenciaMaxAggregateOutputType | null
  }

  export type IntercorrenciaAvgAggregateOutputType = {
    id_intercorrencia: number | null
    id_pedido: number | null
    id_usuario_autor: number | null
  }

  export type IntercorrenciaSumAggregateOutputType = {
    id_intercorrencia: number | null
    id_pedido: number | null
    id_usuario_autor: number | null
  }

  export type IntercorrenciaMinAggregateOutputType = {
    id_intercorrencia: number | null
    id_pedido: number | null
    descricao: string | null
    dthr_criacao: Date | null
    id_usuario_autor: number | null
  }

  export type IntercorrenciaMaxAggregateOutputType = {
    id_intercorrencia: number | null
    id_pedido: number | null
    descricao: string | null
    dthr_criacao: Date | null
    id_usuario_autor: number | null
  }

  export type IntercorrenciaCountAggregateOutputType = {
    id_intercorrencia: number
    id_pedido: number
    descricao: number
    dthr_criacao: number
    id_usuario_autor: number
    _all: number
  }


  export type IntercorrenciaAvgAggregateInputType = {
    id_intercorrencia?: true
    id_pedido?: true
    id_usuario_autor?: true
  }

  export type IntercorrenciaSumAggregateInputType = {
    id_intercorrencia?: true
    id_pedido?: true
    id_usuario_autor?: true
  }

  export type IntercorrenciaMinAggregateInputType = {
    id_intercorrencia?: true
    id_pedido?: true
    descricao?: true
    dthr_criacao?: true
    id_usuario_autor?: true
  }

  export type IntercorrenciaMaxAggregateInputType = {
    id_intercorrencia?: true
    id_pedido?: true
    descricao?: true
    dthr_criacao?: true
    id_usuario_autor?: true
  }

  export type IntercorrenciaCountAggregateInputType = {
    id_intercorrencia?: true
    id_pedido?: true
    descricao?: true
    dthr_criacao?: true
    id_usuario_autor?: true
    _all?: true
  }

  export type IntercorrenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intercorrencia to aggregate.
     */
    where?: intercorrenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intercorrencias to fetch.
     */
    orderBy?: intercorrenciaOrderByWithRelationInput | intercorrenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: intercorrenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intercorrencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intercorrencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned intercorrencias
    **/
    _count?: true | IntercorrenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntercorrenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntercorrenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntercorrenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntercorrenciaMaxAggregateInputType
  }

  export type GetIntercorrenciaAggregateType<T extends IntercorrenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateIntercorrencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntercorrencia[P]>
      : GetScalarType<T[P], AggregateIntercorrencia[P]>
  }




  export type intercorrenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intercorrenciaWhereInput
    orderBy?: intercorrenciaOrderByWithAggregationInput | intercorrenciaOrderByWithAggregationInput[]
    by: IntercorrenciaScalarFieldEnum[] | IntercorrenciaScalarFieldEnum
    having?: intercorrenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntercorrenciaCountAggregateInputType | true
    _avg?: IntercorrenciaAvgAggregateInputType
    _sum?: IntercorrenciaSumAggregateInputType
    _min?: IntercorrenciaMinAggregateInputType
    _max?: IntercorrenciaMaxAggregateInputType
  }

  export type IntercorrenciaGroupByOutputType = {
    id_intercorrencia: number
    id_pedido: number
    descricao: string
    dthr_criacao: Date
    id_usuario_autor: number
    _count: IntercorrenciaCountAggregateOutputType | null
    _avg: IntercorrenciaAvgAggregateOutputType | null
    _sum: IntercorrenciaSumAggregateOutputType | null
    _min: IntercorrenciaMinAggregateOutputType | null
    _max: IntercorrenciaMaxAggregateOutputType | null
  }

  type GetIntercorrenciaGroupByPayload<T extends intercorrenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntercorrenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntercorrenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntercorrenciaGroupByOutputType[P]>
            : GetScalarType<T[P], IntercorrenciaGroupByOutputType[P]>
        }
      >
    >


  export type intercorrenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_intercorrencia?: boolean
    id_pedido?: boolean
    descricao?: boolean
    dthr_criacao?: boolean
    id_usuario_autor?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intercorrencia"]>



  export type intercorrenciaSelectScalar = {
    id_intercorrencia?: boolean
    id_pedido?: boolean
    descricao?: boolean
    dthr_criacao?: boolean
    id_usuario_autor?: boolean
  }

  export type intercorrenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_intercorrencia" | "id_pedido" | "descricao" | "dthr_criacao" | "id_usuario_autor", ExtArgs["result"]["intercorrencia"]>
  export type intercorrenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $intercorrenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "intercorrencia"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_intercorrencia: number
      id_pedido: number
      descricao: string
      dthr_criacao: Date
      id_usuario_autor: number
    }, ExtArgs["result"]["intercorrencia"]>
    composites: {}
  }

  type intercorrenciaGetPayload<S extends boolean | null | undefined | intercorrenciaDefaultArgs> = $Result.GetResult<Prisma.$intercorrenciaPayload, S>

  type intercorrenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<intercorrenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntercorrenciaCountAggregateInputType | true
    }

  export interface intercorrenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['intercorrencia'], meta: { name: 'intercorrencia' } }
    /**
     * Find zero or one Intercorrencia that matches the filter.
     * @param {intercorrenciaFindUniqueArgs} args - Arguments to find a Intercorrencia
     * @example
     * // Get one Intercorrencia
     * const intercorrencia = await prisma.intercorrencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends intercorrenciaFindUniqueArgs>(args: SelectSubset<T, intercorrenciaFindUniqueArgs<ExtArgs>>): Prisma__intercorrenciaClient<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Intercorrencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {intercorrenciaFindUniqueOrThrowArgs} args - Arguments to find a Intercorrencia
     * @example
     * // Get one Intercorrencia
     * const intercorrencia = await prisma.intercorrencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends intercorrenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, intercorrenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__intercorrenciaClient<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intercorrencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intercorrenciaFindFirstArgs} args - Arguments to find a Intercorrencia
     * @example
     * // Get one Intercorrencia
     * const intercorrencia = await prisma.intercorrencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends intercorrenciaFindFirstArgs>(args?: SelectSubset<T, intercorrenciaFindFirstArgs<ExtArgs>>): Prisma__intercorrenciaClient<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intercorrencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intercorrenciaFindFirstOrThrowArgs} args - Arguments to find a Intercorrencia
     * @example
     * // Get one Intercorrencia
     * const intercorrencia = await prisma.intercorrencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends intercorrenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, intercorrenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__intercorrenciaClient<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Intercorrencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intercorrenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intercorrencias
     * const intercorrencias = await prisma.intercorrencia.findMany()
     * 
     * // Get first 10 Intercorrencias
     * const intercorrencias = await prisma.intercorrencia.findMany({ take: 10 })
     * 
     * // Only select the `id_intercorrencia`
     * const intercorrenciaWithId_intercorrenciaOnly = await prisma.intercorrencia.findMany({ select: { id_intercorrencia: true } })
     * 
     */
    findMany<T extends intercorrenciaFindManyArgs>(args?: SelectSubset<T, intercorrenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Intercorrencia.
     * @param {intercorrenciaCreateArgs} args - Arguments to create a Intercorrencia.
     * @example
     * // Create one Intercorrencia
     * const Intercorrencia = await prisma.intercorrencia.create({
     *   data: {
     *     // ... data to create a Intercorrencia
     *   }
     * })
     * 
     */
    create<T extends intercorrenciaCreateArgs>(args: SelectSubset<T, intercorrenciaCreateArgs<ExtArgs>>): Prisma__intercorrenciaClient<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Intercorrencias.
     * @param {intercorrenciaCreateManyArgs} args - Arguments to create many Intercorrencias.
     * @example
     * // Create many Intercorrencias
     * const intercorrencia = await prisma.intercorrencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends intercorrenciaCreateManyArgs>(args?: SelectSubset<T, intercorrenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Intercorrencia.
     * @param {intercorrenciaDeleteArgs} args - Arguments to delete one Intercorrencia.
     * @example
     * // Delete one Intercorrencia
     * const Intercorrencia = await prisma.intercorrencia.delete({
     *   where: {
     *     // ... filter to delete one Intercorrencia
     *   }
     * })
     * 
     */
    delete<T extends intercorrenciaDeleteArgs>(args: SelectSubset<T, intercorrenciaDeleteArgs<ExtArgs>>): Prisma__intercorrenciaClient<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Intercorrencia.
     * @param {intercorrenciaUpdateArgs} args - Arguments to update one Intercorrencia.
     * @example
     * // Update one Intercorrencia
     * const intercorrencia = await prisma.intercorrencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends intercorrenciaUpdateArgs>(args: SelectSubset<T, intercorrenciaUpdateArgs<ExtArgs>>): Prisma__intercorrenciaClient<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Intercorrencias.
     * @param {intercorrenciaDeleteManyArgs} args - Arguments to filter Intercorrencias to delete.
     * @example
     * // Delete a few Intercorrencias
     * const { count } = await prisma.intercorrencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends intercorrenciaDeleteManyArgs>(args?: SelectSubset<T, intercorrenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intercorrencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intercorrenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intercorrencias
     * const intercorrencia = await prisma.intercorrencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends intercorrenciaUpdateManyArgs>(args: SelectSubset<T, intercorrenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Intercorrencia.
     * @param {intercorrenciaUpsertArgs} args - Arguments to update or create a Intercorrencia.
     * @example
     * // Update or create a Intercorrencia
     * const intercorrencia = await prisma.intercorrencia.upsert({
     *   create: {
     *     // ... data to create a Intercorrencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intercorrencia we want to update
     *   }
     * })
     */
    upsert<T extends intercorrenciaUpsertArgs>(args: SelectSubset<T, intercorrenciaUpsertArgs<ExtArgs>>): Prisma__intercorrenciaClient<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Intercorrencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intercorrenciaCountArgs} args - Arguments to filter Intercorrencias to count.
     * @example
     * // Count the number of Intercorrencias
     * const count = await prisma.intercorrencia.count({
     *   where: {
     *     // ... the filter for the Intercorrencias we want to count
     *   }
     * })
    **/
    count<T extends intercorrenciaCountArgs>(
      args?: Subset<T, intercorrenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntercorrenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Intercorrencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntercorrenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntercorrenciaAggregateArgs>(args: Subset<T, IntercorrenciaAggregateArgs>): Prisma.PrismaPromise<GetIntercorrenciaAggregateType<T>>

    /**
     * Group by Intercorrencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intercorrenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends intercorrenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: intercorrenciaGroupByArgs['orderBy'] }
        : { orderBy?: intercorrenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, intercorrenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntercorrenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the intercorrencia model
   */
  readonly fields: intercorrenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for intercorrencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__intercorrenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the intercorrencia model
   */
  interface intercorrenciaFieldRefs {
    readonly id_intercorrencia: FieldRef<"intercorrencia", 'Int'>
    readonly id_pedido: FieldRef<"intercorrencia", 'Int'>
    readonly descricao: FieldRef<"intercorrencia", 'String'>
    readonly dthr_criacao: FieldRef<"intercorrencia", 'DateTime'>
    readonly id_usuario_autor: FieldRef<"intercorrencia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * intercorrencia findUnique
   */
  export type intercorrenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    /**
     * Filter, which intercorrencia to fetch.
     */
    where: intercorrenciaWhereUniqueInput
  }

  /**
   * intercorrencia findUniqueOrThrow
   */
  export type intercorrenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    /**
     * Filter, which intercorrencia to fetch.
     */
    where: intercorrenciaWhereUniqueInput
  }

  /**
   * intercorrencia findFirst
   */
  export type intercorrenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    /**
     * Filter, which intercorrencia to fetch.
     */
    where?: intercorrenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intercorrencias to fetch.
     */
    orderBy?: intercorrenciaOrderByWithRelationInput | intercorrenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intercorrencias.
     */
    cursor?: intercorrenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intercorrencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intercorrencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intercorrencias.
     */
    distinct?: IntercorrenciaScalarFieldEnum | IntercorrenciaScalarFieldEnum[]
  }

  /**
   * intercorrencia findFirstOrThrow
   */
  export type intercorrenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    /**
     * Filter, which intercorrencia to fetch.
     */
    where?: intercorrenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intercorrencias to fetch.
     */
    orderBy?: intercorrenciaOrderByWithRelationInput | intercorrenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intercorrencias.
     */
    cursor?: intercorrenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intercorrencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intercorrencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intercorrencias.
     */
    distinct?: IntercorrenciaScalarFieldEnum | IntercorrenciaScalarFieldEnum[]
  }

  /**
   * intercorrencia findMany
   */
  export type intercorrenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    /**
     * Filter, which intercorrencias to fetch.
     */
    where?: intercorrenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intercorrencias to fetch.
     */
    orderBy?: intercorrenciaOrderByWithRelationInput | intercorrenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing intercorrencias.
     */
    cursor?: intercorrenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intercorrencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intercorrencias.
     */
    skip?: number
    distinct?: IntercorrenciaScalarFieldEnum | IntercorrenciaScalarFieldEnum[]
  }

  /**
   * intercorrencia create
   */
  export type intercorrenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a intercorrencia.
     */
    data: XOR<intercorrenciaCreateInput, intercorrenciaUncheckedCreateInput>
  }

  /**
   * intercorrencia createMany
   */
  export type intercorrenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many intercorrencias.
     */
    data: intercorrenciaCreateManyInput | intercorrenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * intercorrencia update
   */
  export type intercorrenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a intercorrencia.
     */
    data: XOR<intercorrenciaUpdateInput, intercorrenciaUncheckedUpdateInput>
    /**
     * Choose, which intercorrencia to update.
     */
    where: intercorrenciaWhereUniqueInput
  }

  /**
   * intercorrencia updateMany
   */
  export type intercorrenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update intercorrencias.
     */
    data: XOR<intercorrenciaUpdateManyMutationInput, intercorrenciaUncheckedUpdateManyInput>
    /**
     * Filter which intercorrencias to update
     */
    where?: intercorrenciaWhereInput
    /**
     * Limit how many intercorrencias to update.
     */
    limit?: number
  }

  /**
   * intercorrencia upsert
   */
  export type intercorrenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the intercorrencia to update in case it exists.
     */
    where: intercorrenciaWhereUniqueInput
    /**
     * In case the intercorrencia found by the `where` argument doesn't exist, create a new intercorrencia with this data.
     */
    create: XOR<intercorrenciaCreateInput, intercorrenciaUncheckedCreateInput>
    /**
     * In case the intercorrencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<intercorrenciaUpdateInput, intercorrenciaUncheckedUpdateInput>
  }

  /**
   * intercorrencia delete
   */
  export type intercorrenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    /**
     * Filter which intercorrencia to delete.
     */
    where: intercorrenciaWhereUniqueInput
  }

  /**
   * intercorrencia deleteMany
   */
  export type intercorrenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intercorrencias to delete
     */
    where?: intercorrenciaWhereInput
    /**
     * Limit how many intercorrencias to delete.
     */
    limit?: number
  }

  /**
   * intercorrencia without action
   */
  export type intercorrenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_usuario_autor: number | null
    id_usuario_alt: number | null
    preco_frete: Decimal | null
    tx_desconto: number | null
    preco_final: Decimal | null
    preco_custo_total: Decimal | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_usuario_autor: number | null
    id_usuario_alt: number | null
    preco_frete: Decimal | null
    tx_desconto: number | null
    preco_final: Decimal | null
    preco_custo_total: Decimal | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_usuario_autor: number | null
    dthr_criacao: Date | null
    id_usuario_alt: number | null
    dthr_alt: Date | null
    tipo_entrega: $Enums.pedido_tipo_entrega | null
    dthr_entregar: Date | null
    preco_frete: Decimal | null
    tx_desconto: number | null
    preco_final: Decimal | null
    dt_venc_pagamento: Date | null
    dt_pago: Date | null
    preco_custo_total: Decimal | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_usuario_autor: number | null
    dthr_criacao: Date | null
    id_usuario_alt: number | null
    dthr_alt: Date | null
    tipo_entrega: $Enums.pedido_tipo_entrega | null
    dthr_entregar: Date | null
    preco_frete: Decimal | null
    tx_desconto: number | null
    preco_final: Decimal | null
    dt_venc_pagamento: Date | null
    dt_pago: Date | null
    preco_custo_total: Decimal | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao: number
    id_usuario_alt: number
    dthr_alt: number
    tipo_entrega: number
    dthr_entregar: number
    preco_frete: number
    tx_desconto: number
    preco_final: number
    dt_venc_pagamento: number
    dt_pago: number
    preco_custo_total: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    id_cliente?: true
    id_usuario_autor?: true
    id_usuario_alt?: true
    preco_frete?: true
    tx_desconto?: true
    preco_final?: true
    preco_custo_total?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    id_cliente?: true
    id_usuario_autor?: true
    id_usuario_alt?: true
    preco_frete?: true
    tx_desconto?: true
    preco_final?: true
    preco_custo_total?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    id_cliente?: true
    id_usuario_autor?: true
    dthr_criacao?: true
    id_usuario_alt?: true
    dthr_alt?: true
    tipo_entrega?: true
    dthr_entregar?: true
    preco_frete?: true
    tx_desconto?: true
    preco_final?: true
    dt_venc_pagamento?: true
    dt_pago?: true
    preco_custo_total?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    id_cliente?: true
    id_usuario_autor?: true
    dthr_criacao?: true
    id_usuario_alt?: true
    dthr_alt?: true
    tipo_entrega?: true
    dthr_entregar?: true
    preco_frete?: true
    tx_desconto?: true
    preco_final?: true
    dt_venc_pagamento?: true
    dt_pago?: true
    preco_custo_total?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    id_cliente?: true
    id_usuario_autor?: true
    dthr_criacao?: true
    id_usuario_alt?: true
    dthr_alt?: true
    tipo_entrega?: true
    dthr_entregar?: true
    preco_frete?: true
    tx_desconto?: true
    preco_final?: true
    dt_venc_pagamento?: true
    dt_pago?: true
    preco_custo_total?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao: Date
    id_usuario_alt: number | null
    dthr_alt: Date | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date
    preco_frete: Decimal
    tx_desconto: number
    preco_final: Decimal
    dt_venc_pagamento: Date | null
    dt_pago: Date | null
    preco_custo_total: Decimal
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    id_usuario_autor?: boolean
    dthr_criacao?: boolean
    id_usuario_alt?: boolean
    dthr_alt?: boolean
    tipo_entrega?: boolean
    dthr_entregar?: boolean
    preco_frete?: boolean
    tx_desconto?: boolean
    preco_final?: boolean
    dt_venc_pagamento?: boolean
    dt_pago?: boolean
    preco_custo_total?: boolean
    destinatario?: boolean | pedido$destinatarioArgs<ExtArgs>
    destino?: boolean | pedido$destinoArgs<ExtArgs>
    est_andamento_pedido?: boolean | pedido$est_andamento_pedidoArgs<ExtArgs>
    info_cancelamento?: boolean | pedido$info_cancelamentoArgs<ExtArgs>
    info_pagamento?: boolean | pedido$info_pagamentoArgs<ExtArgs>
    info_pf?: boolean | pedido$info_pfArgs<ExtArgs>
    info_pj?: boolean | pedido$info_pjArgs<ExtArgs>
    intercorrencia?: boolean | pedido$intercorrenciaArgs<ExtArgs>
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    produto_pedido?: boolean | pedido$produto_pedidoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type pedidoSelectScalar = {
    id?: boolean
    id_cliente?: boolean
    id_usuario_autor?: boolean
    dthr_criacao?: boolean
    id_usuario_alt?: boolean
    dthr_alt?: boolean
    tipo_entrega?: boolean
    dthr_entregar?: boolean
    preco_frete?: boolean
    tx_desconto?: boolean
    preco_final?: boolean
    dt_venc_pagamento?: boolean
    dt_pago?: boolean
    preco_custo_total?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_cliente" | "id_usuario_autor" | "dthr_criacao" | "id_usuario_alt" | "dthr_alt" | "tipo_entrega" | "dthr_entregar" | "preco_frete" | "tx_desconto" | "preco_final" | "dt_venc_pagamento" | "dt_pago" | "preco_custo_total", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinatario?: boolean | pedido$destinatarioArgs<ExtArgs>
    destino?: boolean | pedido$destinoArgs<ExtArgs>
    est_andamento_pedido?: boolean | pedido$est_andamento_pedidoArgs<ExtArgs>
    info_cancelamento?: boolean | pedido$info_cancelamentoArgs<ExtArgs>
    info_pagamento?: boolean | pedido$info_pagamentoArgs<ExtArgs>
    info_pf?: boolean | pedido$info_pfArgs<ExtArgs>
    info_pj?: boolean | pedido$info_pjArgs<ExtArgs>
    intercorrencia?: boolean | pedido$intercorrenciaArgs<ExtArgs>
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    produto_pedido?: boolean | pedido$produto_pedidoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      destinatario: Prisma.$destinatarioPayload<ExtArgs> | null
      destino: Prisma.$destinoPayload<ExtArgs> | null
      est_andamento_pedido: Prisma.$est_andamento_pedidoPayload<ExtArgs>[]
      info_cancelamento: Prisma.$info_cancelamentoPayload<ExtArgs> | null
      info_pagamento: Prisma.$info_pagamentoPayload<ExtArgs> | null
      info_pf: Prisma.$info_pfPayload<ExtArgs> | null
      info_pj: Prisma.$info_pjPayload<ExtArgs> | null
      intercorrencia: Prisma.$intercorrenciaPayload<ExtArgs>[]
      cliente: Prisma.$clientePayload<ExtArgs>
      produto_pedido: Prisma.$produto_pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * id                   Int                    @default(autoincrement())
       */
      id: number
      id_cliente: number
      id_usuario_autor: number
      dthr_criacao: Date
      id_usuario_alt: number | null
      dthr_alt: Date | null
      tipo_entrega: $Enums.pedido_tipo_entrega
      dthr_entregar: Date
      preco_frete: Prisma.Decimal
      tx_desconto: number
      preco_final: Prisma.Decimal
      dt_venc_pagamento: Date | null
      dt_pago: Date | null
      preco_custo_total: Prisma.Decimal
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinatario<T extends pedido$destinatarioArgs<ExtArgs> = {}>(args?: Subset<T, pedido$destinatarioArgs<ExtArgs>>): Prisma__destinatarioClient<$Result.GetResult<Prisma.$destinatarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    destino<T extends pedido$destinoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$destinoArgs<ExtArgs>>): Prisma__destinoClient<$Result.GetResult<Prisma.$destinoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    est_andamento_pedido<T extends pedido$est_andamento_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$est_andamento_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$est_andamento_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    info_cancelamento<T extends pedido$info_cancelamentoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$info_cancelamentoArgs<ExtArgs>>): Prisma__info_cancelamentoClient<$Result.GetResult<Prisma.$info_cancelamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    info_pagamento<T extends pedido$info_pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$info_pagamentoArgs<ExtArgs>>): Prisma__info_pagamentoClient<$Result.GetResult<Prisma.$info_pagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    info_pf<T extends pedido$info_pfArgs<ExtArgs> = {}>(args?: Subset<T, pedido$info_pfArgs<ExtArgs>>): Prisma__info_pfClient<$Result.GetResult<Prisma.$info_pfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    info_pj<T extends pedido$info_pjArgs<ExtArgs> = {}>(args?: Subset<T, pedido$info_pjArgs<ExtArgs>>): Prisma__info_pjClient<$Result.GetResult<Prisma.$info_pjPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    intercorrencia<T extends pedido$intercorrenciaArgs<ExtArgs> = {}>(args?: Subset<T, pedido$intercorrenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cliente<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto_pedido<T extends pedido$produto_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$produto_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly id: FieldRef<"pedido", 'Int'>
    readonly id_cliente: FieldRef<"pedido", 'Int'>
    readonly id_usuario_autor: FieldRef<"pedido", 'Int'>
    readonly dthr_criacao: FieldRef<"pedido", 'DateTime'>
    readonly id_usuario_alt: FieldRef<"pedido", 'Int'>
    readonly dthr_alt: FieldRef<"pedido", 'DateTime'>
    readonly tipo_entrega: FieldRef<"pedido", 'pedido_tipo_entrega'>
    readonly dthr_entregar: FieldRef<"pedido", 'DateTime'>
    readonly preco_frete: FieldRef<"pedido", 'Decimal'>
    readonly tx_desconto: FieldRef<"pedido", 'Int'>
    readonly preco_final: FieldRef<"pedido", 'Decimal'>
    readonly dt_venc_pagamento: FieldRef<"pedido", 'DateTime'>
    readonly dt_pago: FieldRef<"pedido", 'DateTime'>
    readonly preco_custo_total: FieldRef<"pedido", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido.destinatario
   */
  export type pedido$destinatarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinatario
     */
    select?: destinatarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinatario
     */
    omit?: destinatarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinatarioInclude<ExtArgs> | null
    where?: destinatarioWhereInput
  }

  /**
   * pedido.destino
   */
  export type pedido$destinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destino
     */
    select?: destinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destino
     */
    omit?: destinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinoInclude<ExtArgs> | null
    where?: destinoWhereInput
  }

  /**
   * pedido.est_andamento_pedido
   */
  export type pedido$est_andamento_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the est_andamento_pedido
     */
    select?: est_andamento_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the est_andamento_pedido
     */
    omit?: est_andamento_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: est_andamento_pedidoInclude<ExtArgs> | null
    where?: est_andamento_pedidoWhereInput
    orderBy?: est_andamento_pedidoOrderByWithRelationInput | est_andamento_pedidoOrderByWithRelationInput[]
    cursor?: est_andamento_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Est_andamento_pedidoScalarFieldEnum | Est_andamento_pedidoScalarFieldEnum[]
  }

  /**
   * pedido.info_cancelamento
   */
  export type pedido$info_cancelamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_cancelamento
     */
    select?: info_cancelamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_cancelamento
     */
    omit?: info_cancelamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_cancelamentoInclude<ExtArgs> | null
    where?: info_cancelamentoWhereInput
  }

  /**
   * pedido.info_pagamento
   */
  export type pedido$info_pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pagamento
     */
    select?: info_pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pagamento
     */
    omit?: info_pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pagamentoInclude<ExtArgs> | null
    where?: info_pagamentoWhereInput
  }

  /**
   * pedido.info_pf
   */
  export type pedido$info_pfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pf
     */
    select?: info_pfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pf
     */
    omit?: info_pfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pfInclude<ExtArgs> | null
    where?: info_pfWhereInput
  }

  /**
   * pedido.info_pj
   */
  export type pedido$info_pjArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the info_pj
     */
    select?: info_pjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the info_pj
     */
    omit?: info_pjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: info_pjInclude<ExtArgs> | null
    where?: info_pjWhereInput
  }

  /**
   * pedido.intercorrencia
   */
  export type pedido$intercorrenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    where?: intercorrenciaWhereInput
    orderBy?: intercorrenciaOrderByWithRelationInput | intercorrenciaOrderByWithRelationInput[]
    cursor?: intercorrenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntercorrenciaScalarFieldEnum | IntercorrenciaScalarFieldEnum[]
  }

  /**
   * pedido.produto_pedido
   */
  export type pedido$produto_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    where?: produto_pedidoWhereInput
    orderBy?: produto_pedidoOrderByWithRelationInput | produto_pedidoOrderByWithRelationInput[]
    cursor?: produto_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Produto_pedidoScalarFieldEnum | Produto_pedidoScalarFieldEnum[]
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Model produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    id_unidade: number | null
    preco_venda: Decimal | null
    preco_custo: Decimal | null
    id_usuario_alt: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    id_unidade: number | null
    preco_venda: Decimal | null
    preco_custo: Decimal | null
    id_usuario_alt: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    id_unidade: number | null
    nome: string | null
    preco_venda: Decimal | null
    preco_custo: Decimal | null
    id_usuario_alt: number | null
    dthr_alt: Date | null
    estado: boolean | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    id_unidade: number | null
    nome: string | null
    preco_venda: Decimal | null
    preco_custo: Decimal | null
    id_usuario_alt: number | null
    dthr_alt: Date | null
    estado: boolean | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    id_categoria: number
    id_unidade: number
    nome: number
    preco_venda: number
    preco_custo: number
    id_usuario_alt: number
    dthr_alt: number
    estado: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    id_categoria?: true
    id_unidade?: true
    preco_venda?: true
    preco_custo?: true
    id_usuario_alt?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    id_categoria?: true
    id_unidade?: true
    preco_venda?: true
    preco_custo?: true
    id_usuario_alt?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    id_categoria?: true
    id_unidade?: true
    nome?: true
    preco_venda?: true
    preco_custo?: true
    id_usuario_alt?: true
    dthr_alt?: true
    estado?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    id_categoria?: true
    id_unidade?: true
    nome?: true
    preco_venda?: true
    preco_custo?: true
    id_usuario_alt?: true
    dthr_alt?: true
    estado?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    id_categoria?: true
    id_unidade?: true
    nome?: true
    preco_venda?: true
    preco_custo?: true
    id_usuario_alt?: true
    dthr_alt?: true
    estado?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto to aggregate.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithAggregationInput | produtoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    id_categoria: number
    id_unidade: number
    nome: string
    preco_venda: Decimal
    preco_custo: Decimal
    id_usuario_alt: number | null
    dthr_alt: Date | null
    estado: boolean
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_categoria?: boolean
    id_unidade?: boolean
    nome?: boolean
    preco_venda?: boolean
    preco_custo?: boolean
    id_usuario_alt?: boolean
    dthr_alt?: boolean
    estado?: boolean
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    unidade?: boolean | unidadeDefaultArgs<ExtArgs>
    usuario?: boolean | produto$usuarioArgs<ExtArgs>
    produto_pedido?: boolean | produto$produto_pedidoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>



  export type produtoSelectScalar = {
    id?: boolean
    id_categoria?: boolean
    id_unidade?: boolean
    nome?: boolean
    preco_venda?: boolean
    preco_custo?: boolean
    id_usuario_alt?: boolean
    dthr_alt?: boolean
    estado?: boolean
  }

  export type produtoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_categoria" | "id_unidade" | "nome" | "preco_venda" | "preco_custo" | "id_usuario_alt" | "dthr_alt" | "estado", ExtArgs["result"]["produto"]>
  export type produtoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    unidade?: boolean | unidadeDefaultArgs<ExtArgs>
    usuario?: boolean | produto$usuarioArgs<ExtArgs>
    produto_pedido?: boolean | produto$produto_pedidoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produto"
    objects: {
      categoria: Prisma.$categoriaPayload<ExtArgs>
      unidade: Prisma.$unidadePayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
      produto_pedido: Prisma.$produto_pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * id             Int              @default(autoincrement())
       */
      id: number
      id_categoria: number
      id_unidade: number
      nome: string
      preco_venda: Prisma.Decimal
      preco_custo: Prisma.Decimal
      id_usuario_alt: number | null
      dthr_alt: Date | null
      estado: boolean
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type produtoGetPayload<S extends boolean | null | undefined | produtoDefaultArgs> = $Result.GetResult<Prisma.$produtoPayload, S>

  type produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produto'], meta: { name: 'produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {produtoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produtoFindUniqueArgs>(args: SelectSubset<T, produtoFindUniqueArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produtoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produtoFindFirstArgs>(args?: SelectSubset<T, produtoFindFirstArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produtoFindManyArgs>(args?: SelectSubset<T, produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {produtoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends produtoCreateArgs>(args: SelectSubset<T, produtoCreateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {produtoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produtoCreateManyArgs>(args?: SelectSubset<T, produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {produtoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends produtoDeleteArgs>(args: SelectSubset<T, produtoDeleteArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {produtoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produtoUpdateArgs>(args: SelectSubset<T, produtoUpdateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {produtoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produtoDeleteManyArgs>(args?: SelectSubset<T, produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produtoUpdateManyArgs>(args: SelectSubset<T, produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {produtoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends produtoUpsertArgs>(args: SelectSubset<T, produtoUpsertArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends produtoCountArgs>(
      args?: Subset<T, produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produtoGroupByArgs['orderBy'] }
        : { orderBy?: produtoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produto model
   */
  readonly fields: produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends categoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriaDefaultArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unidade<T extends unidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, unidadeDefaultArgs<ExtArgs>>): Prisma__unidadeClient<$Result.GetResult<Prisma.$unidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends produto$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, produto$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produto_pedido<T extends produto$produto_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, produto$produto_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produto model
   */
  interface produtoFieldRefs {
    readonly id: FieldRef<"produto", 'Int'>
    readonly id_categoria: FieldRef<"produto", 'Int'>
    readonly id_unidade: FieldRef<"produto", 'Int'>
    readonly nome: FieldRef<"produto", 'String'>
    readonly preco_venda: FieldRef<"produto", 'Decimal'>
    readonly preco_custo: FieldRef<"produto", 'Decimal'>
    readonly id_usuario_alt: FieldRef<"produto", 'Int'>
    readonly dthr_alt: FieldRef<"produto", 'DateTime'>
    readonly estado: FieldRef<"produto", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * produto findUnique
   */
  export type produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findUniqueOrThrow
   */
  export type produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findFirst
   */
  export type produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findFirstOrThrow
   */
  export type produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findMany
   */
  export type produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto create
   */
  export type produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The data needed to create a produto.
     */
    data: XOR<produtoCreateInput, produtoUncheckedCreateInput>
  }

  /**
   * produto createMany
   */
  export type produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produtos.
     */
    data: produtoCreateManyInput | produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produto update
   */
  export type produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The data needed to update a produto.
     */
    data: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
    /**
     * Choose, which produto to update.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto updateMany
   */
  export type produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produtos.
     */
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
  }

  /**
   * produto upsert
   */
  export type produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The filter to search for the produto to update in case it exists.
     */
    where: produtoWhereUniqueInput
    /**
     * In case the produto found by the `where` argument doesn't exist, create a new produto with this data.
     */
    create: XOR<produtoCreateInput, produtoUncheckedCreateInput>
    /**
     * In case the produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
  }

  /**
   * produto delete
   */
  export type produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter which produto to delete.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto deleteMany
   */
  export type produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to delete
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to delete.
     */
    limit?: number
  }

  /**
   * produto.usuario
   */
  export type produto$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * produto.produto_pedido
   */
  export type produto$produto_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    where?: produto_pedidoWhereInput
    orderBy?: produto_pedidoOrderByWithRelationInput | produto_pedidoOrderByWithRelationInput[]
    cursor?: produto_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Produto_pedidoScalarFieldEnum | Produto_pedidoScalarFieldEnum[]
  }

  /**
   * produto without action
   */
  export type produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
  }


  /**
   * Model produto_pedido
   */

  export type AggregateProduto_pedido = {
    _count: Produto_pedidoCountAggregateOutputType | null
    _avg: Produto_pedidoAvgAggregateOutputType | null
    _sum: Produto_pedidoSumAggregateOutputType | null
    _min: Produto_pedidoMinAggregateOutputType | null
    _max: Produto_pedidoMaxAggregateOutputType | null
  }

  export type Produto_pedidoAvgAggregateOutputType = {
    id_produto: number | null
    id_pedido: number | null
    quantidade: number | null
    preco_venda: Decimal | null
    preco_custo: Decimal | null
  }

  export type Produto_pedidoSumAggregateOutputType = {
    id_produto: number | null
    id_pedido: number | null
    quantidade: number | null
    preco_venda: Decimal | null
    preco_custo: Decimal | null
  }

  export type Produto_pedidoMinAggregateOutputType = {
    id_produto: number | null
    id_pedido: number | null
    quantidade: number | null
    preco_venda: Decimal | null
    preco_custo: Decimal | null
    info_adicional: string | null
  }

  export type Produto_pedidoMaxAggregateOutputType = {
    id_produto: number | null
    id_pedido: number | null
    quantidade: number | null
    preco_venda: Decimal | null
    preco_custo: Decimal | null
    info_adicional: string | null
  }

  export type Produto_pedidoCountAggregateOutputType = {
    id_produto: number
    id_pedido: number
    quantidade: number
    preco_venda: number
    preco_custo: number
    info_adicional: number
    _all: number
  }


  export type Produto_pedidoAvgAggregateInputType = {
    id_produto?: true
    id_pedido?: true
    quantidade?: true
    preco_venda?: true
    preco_custo?: true
  }

  export type Produto_pedidoSumAggregateInputType = {
    id_produto?: true
    id_pedido?: true
    quantidade?: true
    preco_venda?: true
    preco_custo?: true
  }

  export type Produto_pedidoMinAggregateInputType = {
    id_produto?: true
    id_pedido?: true
    quantidade?: true
    preco_venda?: true
    preco_custo?: true
    info_adicional?: true
  }

  export type Produto_pedidoMaxAggregateInputType = {
    id_produto?: true
    id_pedido?: true
    quantidade?: true
    preco_venda?: true
    preco_custo?: true
    info_adicional?: true
  }

  export type Produto_pedidoCountAggregateInputType = {
    id_produto?: true
    id_pedido?: true
    quantidade?: true
    preco_venda?: true
    preco_custo?: true
    info_adicional?: true
    _all?: true
  }

  export type Produto_pedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto_pedido to aggregate.
     */
    where?: produto_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_pedidos to fetch.
     */
    orderBy?: produto_pedidoOrderByWithRelationInput | produto_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produto_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produto_pedidos
    **/
    _count?: true | Produto_pedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Produto_pedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Produto_pedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Produto_pedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Produto_pedidoMaxAggregateInputType
  }

  export type GetProduto_pedidoAggregateType<T extends Produto_pedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto_pedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto_pedido[P]>
      : GetScalarType<T[P], AggregateProduto_pedido[P]>
  }




  export type produto_pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produto_pedidoWhereInput
    orderBy?: produto_pedidoOrderByWithAggregationInput | produto_pedidoOrderByWithAggregationInput[]
    by: Produto_pedidoScalarFieldEnum[] | Produto_pedidoScalarFieldEnum
    having?: produto_pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Produto_pedidoCountAggregateInputType | true
    _avg?: Produto_pedidoAvgAggregateInputType
    _sum?: Produto_pedidoSumAggregateInputType
    _min?: Produto_pedidoMinAggregateInputType
    _max?: Produto_pedidoMaxAggregateInputType
  }

  export type Produto_pedidoGroupByOutputType = {
    id_produto: number
    id_pedido: number
    quantidade: number
    preco_venda: Decimal
    preco_custo: Decimal
    info_adicional: string | null
    _count: Produto_pedidoCountAggregateOutputType | null
    _avg: Produto_pedidoAvgAggregateOutputType | null
    _sum: Produto_pedidoSumAggregateOutputType | null
    _min: Produto_pedidoMinAggregateOutputType | null
    _max: Produto_pedidoMaxAggregateOutputType | null
  }

  type GetProduto_pedidoGroupByPayload<T extends produto_pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Produto_pedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Produto_pedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Produto_pedidoGroupByOutputType[P]>
            : GetScalarType<T[P], Produto_pedidoGroupByOutputType[P]>
        }
      >
    >


  export type produto_pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produto?: boolean
    id_pedido?: boolean
    quantidade?: boolean
    preco_venda?: boolean
    preco_custo?: boolean
    info_adicional?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto_pedido"]>



  export type produto_pedidoSelectScalar = {
    id_produto?: boolean
    id_pedido?: boolean
    quantidade?: boolean
    preco_venda?: boolean
    preco_custo?: boolean
    info_adicional?: boolean
  }

  export type produto_pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produto" | "id_pedido" | "quantidade" | "preco_venda" | "preco_custo" | "info_adicional", ExtArgs["result"]["produto_pedido"]>
  export type produto_pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }

  export type $produto_pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produto_pedido"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      produto: Prisma.$produtoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produto: number
      id_pedido: number
      quantidade: number
      preco_venda: Prisma.Decimal
      preco_custo: Prisma.Decimal
      info_adicional: string | null
    }, ExtArgs["result"]["produto_pedido"]>
    composites: {}
  }

  type produto_pedidoGetPayload<S extends boolean | null | undefined | produto_pedidoDefaultArgs> = $Result.GetResult<Prisma.$produto_pedidoPayload, S>

  type produto_pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produto_pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Produto_pedidoCountAggregateInputType | true
    }

  export interface produto_pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produto_pedido'], meta: { name: 'produto_pedido' } }
    /**
     * Find zero or one Produto_pedido that matches the filter.
     * @param {produto_pedidoFindUniqueArgs} args - Arguments to find a Produto_pedido
     * @example
     * // Get one Produto_pedido
     * const produto_pedido = await prisma.produto_pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produto_pedidoFindUniqueArgs>(args: SelectSubset<T, produto_pedidoFindUniqueArgs<ExtArgs>>): Prisma__produto_pedidoClient<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto_pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produto_pedidoFindUniqueOrThrowArgs} args - Arguments to find a Produto_pedido
     * @example
     * // Get one Produto_pedido
     * const produto_pedido = await prisma.produto_pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produto_pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, produto_pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produto_pedidoClient<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto_pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_pedidoFindFirstArgs} args - Arguments to find a Produto_pedido
     * @example
     * // Get one Produto_pedido
     * const produto_pedido = await prisma.produto_pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produto_pedidoFindFirstArgs>(args?: SelectSubset<T, produto_pedidoFindFirstArgs<ExtArgs>>): Prisma__produto_pedidoClient<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto_pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_pedidoFindFirstOrThrowArgs} args - Arguments to find a Produto_pedido
     * @example
     * // Get one Produto_pedido
     * const produto_pedido = await prisma.produto_pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produto_pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, produto_pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__produto_pedidoClient<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produto_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produto_pedidos
     * const produto_pedidos = await prisma.produto_pedido.findMany()
     * 
     * // Get first 10 Produto_pedidos
     * const produto_pedidos = await prisma.produto_pedido.findMany({ take: 10 })
     * 
     * // Only select the `id_produto`
     * const produto_pedidoWithId_produtoOnly = await prisma.produto_pedido.findMany({ select: { id_produto: true } })
     * 
     */
    findMany<T extends produto_pedidoFindManyArgs>(args?: SelectSubset<T, produto_pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto_pedido.
     * @param {produto_pedidoCreateArgs} args - Arguments to create a Produto_pedido.
     * @example
     * // Create one Produto_pedido
     * const Produto_pedido = await prisma.produto_pedido.create({
     *   data: {
     *     // ... data to create a Produto_pedido
     *   }
     * })
     * 
     */
    create<T extends produto_pedidoCreateArgs>(args: SelectSubset<T, produto_pedidoCreateArgs<ExtArgs>>): Prisma__produto_pedidoClient<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produto_pedidos.
     * @param {produto_pedidoCreateManyArgs} args - Arguments to create many Produto_pedidos.
     * @example
     * // Create many Produto_pedidos
     * const produto_pedido = await prisma.produto_pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produto_pedidoCreateManyArgs>(args?: SelectSubset<T, produto_pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produto_pedido.
     * @param {produto_pedidoDeleteArgs} args - Arguments to delete one Produto_pedido.
     * @example
     * // Delete one Produto_pedido
     * const Produto_pedido = await prisma.produto_pedido.delete({
     *   where: {
     *     // ... filter to delete one Produto_pedido
     *   }
     * })
     * 
     */
    delete<T extends produto_pedidoDeleteArgs>(args: SelectSubset<T, produto_pedidoDeleteArgs<ExtArgs>>): Prisma__produto_pedidoClient<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto_pedido.
     * @param {produto_pedidoUpdateArgs} args - Arguments to update one Produto_pedido.
     * @example
     * // Update one Produto_pedido
     * const produto_pedido = await prisma.produto_pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produto_pedidoUpdateArgs>(args: SelectSubset<T, produto_pedidoUpdateArgs<ExtArgs>>): Prisma__produto_pedidoClient<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produto_pedidos.
     * @param {produto_pedidoDeleteManyArgs} args - Arguments to filter Produto_pedidos to delete.
     * @example
     * // Delete a few Produto_pedidos
     * const { count } = await prisma.produto_pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produto_pedidoDeleteManyArgs>(args?: SelectSubset<T, produto_pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produto_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produto_pedidos
     * const produto_pedido = await prisma.produto_pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produto_pedidoUpdateManyArgs>(args: SelectSubset<T, produto_pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto_pedido.
     * @param {produto_pedidoUpsertArgs} args - Arguments to update or create a Produto_pedido.
     * @example
     * // Update or create a Produto_pedido
     * const produto_pedido = await prisma.produto_pedido.upsert({
     *   create: {
     *     // ... data to create a Produto_pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto_pedido we want to update
     *   }
     * })
     */
    upsert<T extends produto_pedidoUpsertArgs>(args: SelectSubset<T, produto_pedidoUpsertArgs<ExtArgs>>): Prisma__produto_pedidoClient<$Result.GetResult<Prisma.$produto_pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produto_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_pedidoCountArgs} args - Arguments to filter Produto_pedidos to count.
     * @example
     * // Count the number of Produto_pedidos
     * const count = await prisma.produto_pedido.count({
     *   where: {
     *     // ... the filter for the Produto_pedidos we want to count
     *   }
     * })
    **/
    count<T extends produto_pedidoCountArgs>(
      args?: Subset<T, produto_pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Produto_pedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produto_pedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Produto_pedidoAggregateArgs>(args: Subset<T, Produto_pedidoAggregateArgs>): Prisma.PrismaPromise<GetProduto_pedidoAggregateType<T>>

    /**
     * Group by Produto_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends produto_pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produto_pedidoGroupByArgs['orderBy'] }
        : { orderBy?: produto_pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, produto_pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduto_pedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produto_pedido model
   */
  readonly fields: produto_pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produto_pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produto_pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends produtoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtoDefaultArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produto_pedido model
   */
  interface produto_pedidoFieldRefs {
    readonly id_produto: FieldRef<"produto_pedido", 'Int'>
    readonly id_pedido: FieldRef<"produto_pedido", 'Int'>
    readonly quantidade: FieldRef<"produto_pedido", 'Int'>
    readonly preco_venda: FieldRef<"produto_pedido", 'Decimal'>
    readonly preco_custo: FieldRef<"produto_pedido", 'Decimal'>
    readonly info_adicional: FieldRef<"produto_pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * produto_pedido findUnique
   */
  export type produto_pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which produto_pedido to fetch.
     */
    where: produto_pedidoWhereUniqueInput
  }

  /**
   * produto_pedido findUniqueOrThrow
   */
  export type produto_pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which produto_pedido to fetch.
     */
    where: produto_pedidoWhereUniqueInput
  }

  /**
   * produto_pedido findFirst
   */
  export type produto_pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which produto_pedido to fetch.
     */
    where?: produto_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_pedidos to fetch.
     */
    orderBy?: produto_pedidoOrderByWithRelationInput | produto_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produto_pedidos.
     */
    cursor?: produto_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produto_pedidos.
     */
    distinct?: Produto_pedidoScalarFieldEnum | Produto_pedidoScalarFieldEnum[]
  }

  /**
   * produto_pedido findFirstOrThrow
   */
  export type produto_pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which produto_pedido to fetch.
     */
    where?: produto_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_pedidos to fetch.
     */
    orderBy?: produto_pedidoOrderByWithRelationInput | produto_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produto_pedidos.
     */
    cursor?: produto_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produto_pedidos.
     */
    distinct?: Produto_pedidoScalarFieldEnum | Produto_pedidoScalarFieldEnum[]
  }

  /**
   * produto_pedido findMany
   */
  export type produto_pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which produto_pedidos to fetch.
     */
    where?: produto_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_pedidos to fetch.
     */
    orderBy?: produto_pedidoOrderByWithRelationInput | produto_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produto_pedidos.
     */
    cursor?: produto_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_pedidos.
     */
    skip?: number
    distinct?: Produto_pedidoScalarFieldEnum | Produto_pedidoScalarFieldEnum[]
  }

  /**
   * produto_pedido create
   */
  export type produto_pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a produto_pedido.
     */
    data: XOR<produto_pedidoCreateInput, produto_pedidoUncheckedCreateInput>
  }

  /**
   * produto_pedido createMany
   */
  export type produto_pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produto_pedidos.
     */
    data: produto_pedidoCreateManyInput | produto_pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produto_pedido update
   */
  export type produto_pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a produto_pedido.
     */
    data: XOR<produto_pedidoUpdateInput, produto_pedidoUncheckedUpdateInput>
    /**
     * Choose, which produto_pedido to update.
     */
    where: produto_pedidoWhereUniqueInput
  }

  /**
   * produto_pedido updateMany
   */
  export type produto_pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produto_pedidos.
     */
    data: XOR<produto_pedidoUpdateManyMutationInput, produto_pedidoUncheckedUpdateManyInput>
    /**
     * Filter which produto_pedidos to update
     */
    where?: produto_pedidoWhereInput
    /**
     * Limit how many produto_pedidos to update.
     */
    limit?: number
  }

  /**
   * produto_pedido upsert
   */
  export type produto_pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the produto_pedido to update in case it exists.
     */
    where: produto_pedidoWhereUniqueInput
    /**
     * In case the produto_pedido found by the `where` argument doesn't exist, create a new produto_pedido with this data.
     */
    create: XOR<produto_pedidoCreateInput, produto_pedidoUncheckedCreateInput>
    /**
     * In case the produto_pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produto_pedidoUpdateInput, produto_pedidoUncheckedUpdateInput>
  }

  /**
   * produto_pedido delete
   */
  export type produto_pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
    /**
     * Filter which produto_pedido to delete.
     */
    where: produto_pedidoWhereUniqueInput
  }

  /**
   * produto_pedido deleteMany
   */
  export type produto_pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto_pedidos to delete
     */
    where?: produto_pedidoWhereInput
    /**
     * Limit how many produto_pedidos to delete.
     */
    limit?: number
  }

  /**
   * produto_pedido without action
   */
  export type produto_pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_pedido
     */
    select?: produto_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_pedido
     */
    omit?: produto_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_pedidoInclude<ExtArgs> | null
  }


  /**
   * Model unidade
   */

  export type AggregateUnidade = {
    _count: UnidadeCountAggregateOutputType | null
    _avg: UnidadeAvgAggregateOutputType | null
    _sum: UnidadeSumAggregateOutputType | null
    _min: UnidadeMinAggregateOutputType | null
    _max: UnidadeMaxAggregateOutputType | null
  }

  export type UnidadeAvgAggregateOutputType = {
    id: number | null
  }

  export type UnidadeSumAggregateOutputType = {
    id: number | null
  }

  export type UnidadeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    abreviacao: string | null
  }

  export type UnidadeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    abreviacao: string | null
  }

  export type UnidadeCountAggregateOutputType = {
    id: number
    nome: number
    abreviacao: number
    _all: number
  }


  export type UnidadeAvgAggregateInputType = {
    id?: true
  }

  export type UnidadeSumAggregateInputType = {
    id?: true
  }

  export type UnidadeMinAggregateInputType = {
    id?: true
    nome?: true
    abreviacao?: true
  }

  export type UnidadeMaxAggregateInputType = {
    id?: true
    nome?: true
    abreviacao?: true
  }

  export type UnidadeCountAggregateInputType = {
    id?: true
    nome?: true
    abreviacao?: true
    _all?: true
  }

  export type UnidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which unidade to aggregate.
     */
    where?: unidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidades to fetch.
     */
    orderBy?: unidadeOrderByWithRelationInput | unidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: unidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned unidades
    **/
    _count?: true | UnidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnidadeMaxAggregateInputType
  }

  export type GetUnidadeAggregateType<T extends UnidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateUnidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnidade[P]>
      : GetScalarType<T[P], AggregateUnidade[P]>
  }




  export type unidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unidadeWhereInput
    orderBy?: unidadeOrderByWithAggregationInput | unidadeOrderByWithAggregationInput[]
    by: UnidadeScalarFieldEnum[] | UnidadeScalarFieldEnum
    having?: unidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnidadeCountAggregateInputType | true
    _avg?: UnidadeAvgAggregateInputType
    _sum?: UnidadeSumAggregateInputType
    _min?: UnidadeMinAggregateInputType
    _max?: UnidadeMaxAggregateInputType
  }

  export type UnidadeGroupByOutputType = {
    id: number
    nome: string
    abreviacao: string
    _count: UnidadeCountAggregateOutputType | null
    _avg: UnidadeAvgAggregateOutputType | null
    _sum: UnidadeSumAggregateOutputType | null
    _min: UnidadeMinAggregateOutputType | null
    _max: UnidadeMaxAggregateOutputType | null
  }

  type GetUnidadeGroupByPayload<T extends unidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnidadeGroupByOutputType[P]>
            : GetScalarType<T[P], UnidadeGroupByOutputType[P]>
        }
      >
    >


  export type unidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    abreviacao?: boolean
    produto?: boolean | unidade$produtoArgs<ExtArgs>
    _count?: boolean | UnidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidade"]>



  export type unidadeSelectScalar = {
    id?: boolean
    nome?: boolean
    abreviacao?: boolean
  }

  export type unidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "abreviacao", ExtArgs["result"]["unidade"]>
  export type unidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | unidade$produtoArgs<ExtArgs>
    _count?: boolean | UnidadeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $unidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "unidade"
    objects: {
      produto: Prisma.$produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      abreviacao: string
    }, ExtArgs["result"]["unidade"]>
    composites: {}
  }

  type unidadeGetPayload<S extends boolean | null | undefined | unidadeDefaultArgs> = $Result.GetResult<Prisma.$unidadePayload, S>

  type unidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<unidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnidadeCountAggregateInputType | true
    }

  export interface unidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['unidade'], meta: { name: 'unidade' } }
    /**
     * Find zero or one Unidade that matches the filter.
     * @param {unidadeFindUniqueArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends unidadeFindUniqueArgs>(args: SelectSubset<T, unidadeFindUniqueArgs<ExtArgs>>): Prisma__unidadeClient<$Result.GetResult<Prisma.$unidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {unidadeFindUniqueOrThrowArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends unidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, unidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__unidadeClient<$Result.GetResult<Prisma.$unidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadeFindFirstArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends unidadeFindFirstArgs>(args?: SelectSubset<T, unidadeFindFirstArgs<ExtArgs>>): Prisma__unidadeClient<$Result.GetResult<Prisma.$unidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadeFindFirstOrThrowArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends unidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, unidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__unidadeClient<$Result.GetResult<Prisma.$unidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unidades
     * const unidades = await prisma.unidade.findMany()
     * 
     * // Get first 10 Unidades
     * const unidades = await prisma.unidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unidadeWithIdOnly = await prisma.unidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends unidadeFindManyArgs>(args?: SelectSubset<T, unidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unidade.
     * @param {unidadeCreateArgs} args - Arguments to create a Unidade.
     * @example
     * // Create one Unidade
     * const Unidade = await prisma.unidade.create({
     *   data: {
     *     // ... data to create a Unidade
     *   }
     * })
     * 
     */
    create<T extends unidadeCreateArgs>(args: SelectSubset<T, unidadeCreateArgs<ExtArgs>>): Prisma__unidadeClient<$Result.GetResult<Prisma.$unidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Unidades.
     * @param {unidadeCreateManyArgs} args - Arguments to create many Unidades.
     * @example
     * // Create many Unidades
     * const unidade = await prisma.unidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends unidadeCreateManyArgs>(args?: SelectSubset<T, unidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unidade.
     * @param {unidadeDeleteArgs} args - Arguments to delete one Unidade.
     * @example
     * // Delete one Unidade
     * const Unidade = await prisma.unidade.delete({
     *   where: {
     *     // ... filter to delete one Unidade
     *   }
     * })
     * 
     */
    delete<T extends unidadeDeleteArgs>(args: SelectSubset<T, unidadeDeleteArgs<ExtArgs>>): Prisma__unidadeClient<$Result.GetResult<Prisma.$unidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unidade.
     * @param {unidadeUpdateArgs} args - Arguments to update one Unidade.
     * @example
     * // Update one Unidade
     * const unidade = await prisma.unidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends unidadeUpdateArgs>(args: SelectSubset<T, unidadeUpdateArgs<ExtArgs>>): Prisma__unidadeClient<$Result.GetResult<Prisma.$unidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Unidades.
     * @param {unidadeDeleteManyArgs} args - Arguments to filter Unidades to delete.
     * @example
     * // Delete a few Unidades
     * const { count } = await prisma.unidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends unidadeDeleteManyArgs>(args?: SelectSubset<T, unidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unidades
     * const unidade = await prisma.unidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends unidadeUpdateManyArgs>(args: SelectSubset<T, unidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unidade.
     * @param {unidadeUpsertArgs} args - Arguments to update or create a Unidade.
     * @example
     * // Update or create a Unidade
     * const unidade = await prisma.unidade.upsert({
     *   create: {
     *     // ... data to create a Unidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unidade we want to update
     *   }
     * })
     */
    upsert<T extends unidadeUpsertArgs>(args: SelectSubset<T, unidadeUpsertArgs<ExtArgs>>): Prisma__unidadeClient<$Result.GetResult<Prisma.$unidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Unidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadeCountArgs} args - Arguments to filter Unidades to count.
     * @example
     * // Count the number of Unidades
     * const count = await prisma.unidade.count({
     *   where: {
     *     // ... the filter for the Unidades we want to count
     *   }
     * })
    **/
    count<T extends unidadeCountArgs>(
      args?: Subset<T, unidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnidadeAggregateArgs>(args: Subset<T, UnidadeAggregateArgs>): Prisma.PrismaPromise<GetUnidadeAggregateType<T>>

    /**
     * Group by Unidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends unidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: unidadeGroupByArgs['orderBy'] }
        : { orderBy?: unidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, unidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the unidade model
   */
  readonly fields: unidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for unidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__unidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends unidade$produtoArgs<ExtArgs> = {}>(args?: Subset<T, unidade$produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the unidade model
   */
  interface unidadeFieldRefs {
    readonly id: FieldRef<"unidade", 'Int'>
    readonly nome: FieldRef<"unidade", 'String'>
    readonly abreviacao: FieldRef<"unidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * unidade findUnique
   */
  export type unidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidade
     */
    select?: unidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidade
     */
    omit?: unidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadeInclude<ExtArgs> | null
    /**
     * Filter, which unidade to fetch.
     */
    where: unidadeWhereUniqueInput
  }

  /**
   * unidade findUniqueOrThrow
   */
  export type unidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidade
     */
    select?: unidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidade
     */
    omit?: unidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadeInclude<ExtArgs> | null
    /**
     * Filter, which unidade to fetch.
     */
    where: unidadeWhereUniqueInput
  }

  /**
   * unidade findFirst
   */
  export type unidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidade
     */
    select?: unidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidade
     */
    omit?: unidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadeInclude<ExtArgs> | null
    /**
     * Filter, which unidade to fetch.
     */
    where?: unidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidades to fetch.
     */
    orderBy?: unidadeOrderByWithRelationInput | unidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for unidades.
     */
    cursor?: unidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of unidades.
     */
    distinct?: UnidadeScalarFieldEnum | UnidadeScalarFieldEnum[]
  }

  /**
   * unidade findFirstOrThrow
   */
  export type unidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidade
     */
    select?: unidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidade
     */
    omit?: unidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadeInclude<ExtArgs> | null
    /**
     * Filter, which unidade to fetch.
     */
    where?: unidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidades to fetch.
     */
    orderBy?: unidadeOrderByWithRelationInput | unidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for unidades.
     */
    cursor?: unidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of unidades.
     */
    distinct?: UnidadeScalarFieldEnum | UnidadeScalarFieldEnum[]
  }

  /**
   * unidade findMany
   */
  export type unidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidade
     */
    select?: unidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidade
     */
    omit?: unidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadeInclude<ExtArgs> | null
    /**
     * Filter, which unidades to fetch.
     */
    where?: unidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidades to fetch.
     */
    orderBy?: unidadeOrderByWithRelationInput | unidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing unidades.
     */
    cursor?: unidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidades.
     */
    skip?: number
    distinct?: UnidadeScalarFieldEnum | UnidadeScalarFieldEnum[]
  }

  /**
   * unidade create
   */
  export type unidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidade
     */
    select?: unidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidade
     */
    omit?: unidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a unidade.
     */
    data: XOR<unidadeCreateInput, unidadeUncheckedCreateInput>
  }

  /**
   * unidade createMany
   */
  export type unidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many unidades.
     */
    data: unidadeCreateManyInput | unidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * unidade update
   */
  export type unidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidade
     */
    select?: unidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidade
     */
    omit?: unidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a unidade.
     */
    data: XOR<unidadeUpdateInput, unidadeUncheckedUpdateInput>
    /**
     * Choose, which unidade to update.
     */
    where: unidadeWhereUniqueInput
  }

  /**
   * unidade updateMany
   */
  export type unidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update unidades.
     */
    data: XOR<unidadeUpdateManyMutationInput, unidadeUncheckedUpdateManyInput>
    /**
     * Filter which unidades to update
     */
    where?: unidadeWhereInput
    /**
     * Limit how many unidades to update.
     */
    limit?: number
  }

  /**
   * unidade upsert
   */
  export type unidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidade
     */
    select?: unidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidade
     */
    omit?: unidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the unidade to update in case it exists.
     */
    where: unidadeWhereUniqueInput
    /**
     * In case the unidade found by the `where` argument doesn't exist, create a new unidade with this data.
     */
    create: XOR<unidadeCreateInput, unidadeUncheckedCreateInput>
    /**
     * In case the unidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<unidadeUpdateInput, unidadeUncheckedUpdateInput>
  }

  /**
   * unidade delete
   */
  export type unidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidade
     */
    select?: unidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidade
     */
    omit?: unidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadeInclude<ExtArgs> | null
    /**
     * Filter which unidade to delete.
     */
    where: unidadeWhereUniqueInput
  }

  /**
   * unidade deleteMany
   */
  export type unidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which unidades to delete
     */
    where?: unidadeWhereInput
    /**
     * Limit how many unidades to delete.
     */
    limit?: number
  }

  /**
   * unidade.produto
   */
  export type unidade$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    cursor?: produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * unidade without action
   */
  export type unidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidade
     */
    select?: unidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidade
     */
    omit?: unidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadeInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    login: string | null
    senha: string | null
    tipo: $Enums.usuario_tipo | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    login: string | null
    senha: string | null
    tipo: $Enums.usuario_tipo | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    login: number
    senha: number
    tipo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    login?: true
    senha?: true
    tipo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    login?: true
    senha?: true
    tipo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    login?: true
    senha?: true
    tipo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    login: string
    senha: string
    tipo: $Enums.usuario_tipo
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    login?: boolean
    senha?: boolean
    tipo?: boolean
    cliente?: boolean | usuario$clienteArgs<ExtArgs>
    intercorrencia?: boolean | usuario$intercorrenciaArgs<ExtArgs>
    produto?: boolean | usuario$produtoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    login?: boolean
    senha?: boolean
    tipo?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "login" | "senha" | "tipo", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | usuario$clienteArgs<ExtArgs>
    intercorrencia?: boolean | usuario$intercorrenciaArgs<ExtArgs>
    produto?: boolean | usuario$produtoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      cliente: Prisma.$clientePayload<ExtArgs>[]
      intercorrencia: Prisma.$intercorrenciaPayload<ExtArgs>[]
      produto: Prisma.$produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      login: string
      senha: string
      tipo: $Enums.usuario_tipo
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends usuario$clienteArgs<ExtArgs> = {}>(args?: Subset<T, usuario$clienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    intercorrencia<T extends usuario$intercorrenciaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$intercorrenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intercorrenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produto<T extends usuario$produtoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly nome: FieldRef<"usuario", 'String'>
    readonly login: FieldRef<"usuario", 'String'>
    readonly senha: FieldRef<"usuario", 'String'>
    readonly tipo: FieldRef<"usuario", 'usuario_tipo'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.cliente
   */
  export type usuario$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    cursor?: clienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * usuario.intercorrencia
   */
  export type usuario$intercorrenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intercorrencia
     */
    select?: intercorrenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intercorrencia
     */
    omit?: intercorrenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intercorrenciaInclude<ExtArgs> | null
    where?: intercorrenciaWhereInput
    orderBy?: intercorrenciaOrderByWithRelationInput | intercorrenciaOrderByWithRelationInput[]
    cursor?: intercorrenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntercorrenciaScalarFieldEnum | IntercorrenciaScalarFieldEnum[]
  }

  /**
   * usuario.produto
   */
  export type usuario$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    cursor?: produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    id_usuario_alt: 'id_usuario_alt',
    dthr_alt: 'dthr_alt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const DestinatarioScalarFieldEnum: {
    id_pedido: 'id_pedido',
    info: 'info'
  };

  export type DestinatarioScalarFieldEnum = (typeof DestinatarioScalarFieldEnum)[keyof typeof DestinatarioScalarFieldEnum]


  export const DestinoScalarFieldEnum: {
    id_pedido: 'id_pedido',
    logradouro: 'logradouro',
    numero: 'numero',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    pais: 'pais'
  };

  export type DestinoScalarFieldEnum = (typeof DestinoScalarFieldEnum)[keyof typeof DestinoScalarFieldEnum]


  export const Est_andamentoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type Est_andamentoScalarFieldEnum = (typeof Est_andamentoScalarFieldEnum)[keyof typeof Est_andamentoScalarFieldEnum]


  export const Est_andamento_pedidoScalarFieldEnum: {
    id_est_andamento: 'id_est_andamento',
    id_pedido: 'id_pedido',
    id_usuario_autor: 'id_usuario_autor',
    dthr_criacao: 'dthr_criacao'
  };

  export type Est_andamento_pedidoScalarFieldEnum = (typeof Est_andamento_pedidoScalarFieldEnum)[keyof typeof Est_andamento_pedidoScalarFieldEnum]


  export const Info_cancelamentoScalarFieldEnum: {
    id_pedido: 'id_pedido',
    justificativa: 'justificativa'
  };

  export type Info_cancelamentoScalarFieldEnum = (typeof Info_cancelamentoScalarFieldEnum)[keyof typeof Info_cancelamentoScalarFieldEnum]


  export const Info_pagamentoScalarFieldEnum: {
    id_pedido: 'id_pedido',
    dt_vencimento: 'dt_vencimento',
    dt_pago: 'dt_pago'
  };

  export type Info_pagamentoScalarFieldEnum = (typeof Info_pagamentoScalarFieldEnum)[keyof typeof Info_pagamentoScalarFieldEnum]


  export const Info_pfScalarFieldEnum: {
    id_pedido: 'id_pedido',
    nome_cliente: 'nome_cliente',
    cpf: 'cpf'
  };

  export type Info_pfScalarFieldEnum = (typeof Info_pfScalarFieldEnum)[keyof typeof Info_pfScalarFieldEnum]


  export const Info_pjScalarFieldEnum: {
    id_pedido: 'id_pedido',
    cnpj: 'cnpj',
    nome_fantasia: 'nome_fantasia',
    nome_empresarial: 'nome_empresarial'
  };

  export type Info_pjScalarFieldEnum = (typeof Info_pjScalarFieldEnum)[keyof typeof Info_pjScalarFieldEnum]


  export const IntercorrenciaScalarFieldEnum: {
    id_intercorrencia: 'id_intercorrencia',
    id_pedido: 'id_pedido',
    descricao: 'descricao',
    dthr_criacao: 'dthr_criacao',
    id_usuario_autor: 'id_usuario_autor'
  };

  export type IntercorrenciaScalarFieldEnum = (typeof IntercorrenciaScalarFieldEnum)[keyof typeof IntercorrenciaScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    id_cliente: 'id_cliente',
    id_usuario_autor: 'id_usuario_autor',
    dthr_criacao: 'dthr_criacao',
    id_usuario_alt: 'id_usuario_alt',
    dthr_alt: 'dthr_alt',
    tipo_entrega: 'tipo_entrega',
    dthr_entregar: 'dthr_entregar',
    preco_frete: 'preco_frete',
    tx_desconto: 'tx_desconto',
    preco_final: 'preco_final',
    dt_venc_pagamento: 'dt_venc_pagamento',
    dt_pago: 'dt_pago',
    preco_custo_total: 'preco_custo_total'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    id_categoria: 'id_categoria',
    id_unidade: 'id_unidade',
    nome: 'nome',
    preco_venda: 'preco_venda',
    preco_custo: 'preco_custo',
    id_usuario_alt: 'id_usuario_alt',
    dthr_alt: 'dthr_alt',
    estado: 'estado'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const Produto_pedidoScalarFieldEnum: {
    id_produto: 'id_produto',
    id_pedido: 'id_pedido',
    quantidade: 'quantidade',
    preco_venda: 'preco_venda',
    preco_custo: 'preco_custo',
    info_adicional: 'info_adicional'
  };

  export type Produto_pedidoScalarFieldEnum = (typeof Produto_pedidoScalarFieldEnum)[keyof typeof Produto_pedidoScalarFieldEnum]


  export const UnidadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    abreviacao: 'abreviacao'
  };

  export type UnidadeScalarFieldEnum = (typeof UnidadeScalarFieldEnum)[keyof typeof UnidadeScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    login: 'login',
    senha: 'senha',
    tipo: 'tipo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const categoriaOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type categoriaOrderByRelevanceFieldEnum = (typeof categoriaOrderByRelevanceFieldEnum)[keyof typeof categoriaOrderByRelevanceFieldEnum]


  export const clienteOrderByRelevanceFieldEnum: {
    nome: 'nome',
    telefone: 'telefone'
  };

  export type clienteOrderByRelevanceFieldEnum = (typeof clienteOrderByRelevanceFieldEnum)[keyof typeof clienteOrderByRelevanceFieldEnum]


  export const destinatarioOrderByRelevanceFieldEnum: {
    info: 'info'
  };

  export type destinatarioOrderByRelevanceFieldEnum = (typeof destinatarioOrderByRelevanceFieldEnum)[keyof typeof destinatarioOrderByRelevanceFieldEnum]


  export const destinoOrderByRelevanceFieldEnum: {
    logradouro: 'logradouro',
    numero: 'numero',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    pais: 'pais'
  };

  export type destinoOrderByRelevanceFieldEnum = (typeof destinoOrderByRelevanceFieldEnum)[keyof typeof destinoOrderByRelevanceFieldEnum]


  export const est_andamentoOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type est_andamentoOrderByRelevanceFieldEnum = (typeof est_andamentoOrderByRelevanceFieldEnum)[keyof typeof est_andamentoOrderByRelevanceFieldEnum]


  export const info_cancelamentoOrderByRelevanceFieldEnum: {
    justificativa: 'justificativa'
  };

  export type info_cancelamentoOrderByRelevanceFieldEnum = (typeof info_cancelamentoOrderByRelevanceFieldEnum)[keyof typeof info_cancelamentoOrderByRelevanceFieldEnum]


  export const info_pfOrderByRelevanceFieldEnum: {
    nome_cliente: 'nome_cliente',
    cpf: 'cpf'
  };

  export type info_pfOrderByRelevanceFieldEnum = (typeof info_pfOrderByRelevanceFieldEnum)[keyof typeof info_pfOrderByRelevanceFieldEnum]


  export const info_pjOrderByRelevanceFieldEnum: {
    cnpj: 'cnpj',
    nome_fantasia: 'nome_fantasia',
    nome_empresarial: 'nome_empresarial'
  };

  export type info_pjOrderByRelevanceFieldEnum = (typeof info_pjOrderByRelevanceFieldEnum)[keyof typeof info_pjOrderByRelevanceFieldEnum]


  export const intercorrenciaOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type intercorrenciaOrderByRelevanceFieldEnum = (typeof intercorrenciaOrderByRelevanceFieldEnum)[keyof typeof intercorrenciaOrderByRelevanceFieldEnum]


  export const produtoOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type produtoOrderByRelevanceFieldEnum = (typeof produtoOrderByRelevanceFieldEnum)[keyof typeof produtoOrderByRelevanceFieldEnum]


  export const produto_pedidoOrderByRelevanceFieldEnum: {
    info_adicional: 'info_adicional'
  };

  export type produto_pedidoOrderByRelevanceFieldEnum = (typeof produto_pedidoOrderByRelevanceFieldEnum)[keyof typeof produto_pedidoOrderByRelevanceFieldEnum]


  export const unidadeOrderByRelevanceFieldEnum: {
    nome: 'nome',
    abreviacao: 'abreviacao'
  };

  export type unidadeOrderByRelevanceFieldEnum = (typeof unidadeOrderByRelevanceFieldEnum)[keyof typeof unidadeOrderByRelevanceFieldEnum]


  export const usuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    login: 'login',
    senha: 'senha'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'pedido_tipo_entrega'
   */
  export type Enumpedido_tipo_entregaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pedido_tipo_entrega'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'usuario_tipo'
   */
  export type Enumusuario_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'usuario_tipo'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id?: IntFilter<"categoria"> | number
    nome?: StringFilter<"categoria"> | string
    descricao?: StringNullableFilter<"categoria"> | string | null
    produto?: ProdutoListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    produto?: produtoOrderByRelationAggregateInput
    _relevance?: categoriaOrderByRelevanceInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    nome?: StringFilter<"categoria"> | string
    descricao?: StringNullableFilter<"categoria"> | string | null
    produto?: ProdutoListRelationFilter
  }, "id">

  export type categoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categoria"> | number
    nome?: StringWithAggregatesFilter<"categoria"> | string
    descricao?: StringNullableWithAggregatesFilter<"categoria"> | string | null
  }

  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    id?: IntFilter<"cliente"> | number
    nome?: StringFilter<"cliente"> | string
    telefone?: StringFilter<"cliente"> | string
    id_usuario_alt?: IntNullableFilter<"cliente"> | number | null
    dthr_alt?: DateTimeNullableFilter<"cliente"> | Date | string | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    pedido?: PedidoListRelationFilter
  }

  export type clienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    id_usuario_alt?: SortOrderInput | SortOrder
    dthr_alt?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
    pedido?: pedidoOrderByRelationAggregateInput
    _relevance?: clienteOrderByRelevanceInput
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telefone?: string
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    nome?: StringFilter<"cliente"> | string
    id_usuario_alt?: IntNullableFilter<"cliente"> | number | null
    dthr_alt?: DateTimeNullableFilter<"cliente"> | Date | string | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    pedido?: PedidoListRelationFilter
  }, "id" | "telefone">

  export type clienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    id_usuario_alt?: SortOrderInput | SortOrder
    dthr_alt?: SortOrderInput | SortOrder
    _count?: clienteCountOrderByAggregateInput
    _avg?: clienteAvgOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
    _sum?: clienteSumOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cliente"> | number
    nome?: StringWithAggregatesFilter<"cliente"> | string
    telefone?: StringWithAggregatesFilter<"cliente"> | string
    id_usuario_alt?: IntNullableWithAggregatesFilter<"cliente"> | number | null
    dthr_alt?: DateTimeNullableWithAggregatesFilter<"cliente"> | Date | string | null
  }

  export type destinatarioWhereInput = {
    AND?: destinatarioWhereInput | destinatarioWhereInput[]
    OR?: destinatarioWhereInput[]
    NOT?: destinatarioWhereInput | destinatarioWhereInput[]
    id_pedido?: IntFilter<"destinatario"> | number
    info?: StringFilter<"destinatario"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }

  export type destinatarioOrderByWithRelationInput = {
    id_pedido?: SortOrder
    info?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    _relevance?: destinatarioOrderByRelevanceInput
  }

  export type destinatarioWhereUniqueInput = Prisma.AtLeast<{
    id_pedido?: number
    AND?: destinatarioWhereInput | destinatarioWhereInput[]
    OR?: destinatarioWhereInput[]
    NOT?: destinatarioWhereInput | destinatarioWhereInput[]
    info?: StringFilter<"destinatario"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }, "id_pedido">

  export type destinatarioOrderByWithAggregationInput = {
    id_pedido?: SortOrder
    info?: SortOrder
    _count?: destinatarioCountOrderByAggregateInput
    _avg?: destinatarioAvgOrderByAggregateInput
    _max?: destinatarioMaxOrderByAggregateInput
    _min?: destinatarioMinOrderByAggregateInput
    _sum?: destinatarioSumOrderByAggregateInput
  }

  export type destinatarioScalarWhereWithAggregatesInput = {
    AND?: destinatarioScalarWhereWithAggregatesInput | destinatarioScalarWhereWithAggregatesInput[]
    OR?: destinatarioScalarWhereWithAggregatesInput[]
    NOT?: destinatarioScalarWhereWithAggregatesInput | destinatarioScalarWhereWithAggregatesInput[]
    id_pedido?: IntWithAggregatesFilter<"destinatario"> | number
    info?: StringWithAggregatesFilter<"destinatario"> | string
  }

  export type destinoWhereInput = {
    AND?: destinoWhereInput | destinoWhereInput[]
    OR?: destinoWhereInput[]
    NOT?: destinoWhereInput | destinoWhereInput[]
    id_pedido?: IntFilter<"destino"> | number
    logradouro?: StringFilter<"destino"> | string
    numero?: StringFilter<"destino"> | string
    bairro?: StringFilter<"destino"> | string
    cidade?: StringFilter<"destino"> | string
    estado?: StringFilter<"destino"> | string
    pais?: StringFilter<"destino"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }

  export type destinoOrderByWithRelationInput = {
    id_pedido?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    _relevance?: destinoOrderByRelevanceInput
  }

  export type destinoWhereUniqueInput = Prisma.AtLeast<{
    id_pedido?: number
    AND?: destinoWhereInput | destinoWhereInput[]
    OR?: destinoWhereInput[]
    NOT?: destinoWhereInput | destinoWhereInput[]
    logradouro?: StringFilter<"destino"> | string
    numero?: StringFilter<"destino"> | string
    bairro?: StringFilter<"destino"> | string
    cidade?: StringFilter<"destino"> | string
    estado?: StringFilter<"destino"> | string
    pais?: StringFilter<"destino"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }, "id_pedido">

  export type destinoOrderByWithAggregationInput = {
    id_pedido?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    _count?: destinoCountOrderByAggregateInput
    _avg?: destinoAvgOrderByAggregateInput
    _max?: destinoMaxOrderByAggregateInput
    _min?: destinoMinOrderByAggregateInput
    _sum?: destinoSumOrderByAggregateInput
  }

  export type destinoScalarWhereWithAggregatesInput = {
    AND?: destinoScalarWhereWithAggregatesInput | destinoScalarWhereWithAggregatesInput[]
    OR?: destinoScalarWhereWithAggregatesInput[]
    NOT?: destinoScalarWhereWithAggregatesInput | destinoScalarWhereWithAggregatesInput[]
    id_pedido?: IntWithAggregatesFilter<"destino"> | number
    logradouro?: StringWithAggregatesFilter<"destino"> | string
    numero?: StringWithAggregatesFilter<"destino"> | string
    bairro?: StringWithAggregatesFilter<"destino"> | string
    cidade?: StringWithAggregatesFilter<"destino"> | string
    estado?: StringWithAggregatesFilter<"destino"> | string
    pais?: StringWithAggregatesFilter<"destino"> | string
  }

  export type est_andamentoWhereInput = {
    AND?: est_andamentoWhereInput | est_andamentoWhereInput[]
    OR?: est_andamentoWhereInput[]
    NOT?: est_andamentoWhereInput | est_andamentoWhereInput[]
    id?: IntFilter<"est_andamento"> | number
    nome?: StringFilter<"est_andamento"> | string
    est_andamento_pedido?: Est_andamento_pedidoListRelationFilter
  }

  export type est_andamentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    est_andamento_pedido?: est_andamento_pedidoOrderByRelationAggregateInput
    _relevance?: est_andamentoOrderByRelevanceInput
  }

  export type est_andamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: est_andamentoWhereInput | est_andamentoWhereInput[]
    OR?: est_andamentoWhereInput[]
    NOT?: est_andamentoWhereInput | est_andamentoWhereInput[]
    nome?: StringFilter<"est_andamento"> | string
    est_andamento_pedido?: Est_andamento_pedidoListRelationFilter
  }, "id">

  export type est_andamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: est_andamentoCountOrderByAggregateInput
    _avg?: est_andamentoAvgOrderByAggregateInput
    _max?: est_andamentoMaxOrderByAggregateInput
    _min?: est_andamentoMinOrderByAggregateInput
    _sum?: est_andamentoSumOrderByAggregateInput
  }

  export type est_andamentoScalarWhereWithAggregatesInput = {
    AND?: est_andamentoScalarWhereWithAggregatesInput | est_andamentoScalarWhereWithAggregatesInput[]
    OR?: est_andamentoScalarWhereWithAggregatesInput[]
    NOT?: est_andamentoScalarWhereWithAggregatesInput | est_andamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"est_andamento"> | number
    nome?: StringWithAggregatesFilter<"est_andamento"> | string
  }

  export type est_andamento_pedidoWhereInput = {
    AND?: est_andamento_pedidoWhereInput | est_andamento_pedidoWhereInput[]
    OR?: est_andamento_pedidoWhereInput[]
    NOT?: est_andamento_pedidoWhereInput | est_andamento_pedidoWhereInput[]
    id_est_andamento?: IntFilter<"est_andamento_pedido"> | number
    id_pedido?: IntFilter<"est_andamento_pedido"> | number
    id_usuario_autor?: IntFilter<"est_andamento_pedido"> | number
    dthr_criacao?: DateTimeFilter<"est_andamento_pedido"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    est_andamento?: XOR<Est_andamentoScalarRelationFilter, est_andamentoWhereInput>
  }

  export type est_andamento_pedidoOrderByWithRelationInput = {
    id_est_andamento?: SortOrder
    id_pedido?: SortOrder
    id_usuario_autor?: SortOrder
    dthr_criacao?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    est_andamento?: est_andamentoOrderByWithRelationInput
  }

  export type est_andamento_pedidoWhereUniqueInput = Prisma.AtLeast<{
    id_est_andamento_id_pedido?: est_andamento_pedidoId_est_andamentoId_pedidoCompoundUniqueInput
    AND?: est_andamento_pedidoWhereInput | est_andamento_pedidoWhereInput[]
    OR?: est_andamento_pedidoWhereInput[]
    NOT?: est_andamento_pedidoWhereInput | est_andamento_pedidoWhereInput[]
    id_est_andamento?: IntFilter<"est_andamento_pedido"> | number
    id_pedido?: IntFilter<"est_andamento_pedido"> | number
    id_usuario_autor?: IntFilter<"est_andamento_pedido"> | number
    dthr_criacao?: DateTimeFilter<"est_andamento_pedido"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    est_andamento?: XOR<Est_andamentoScalarRelationFilter, est_andamentoWhereInput>
  }, "id_est_andamento_id_pedido">

  export type est_andamento_pedidoOrderByWithAggregationInput = {
    id_est_andamento?: SortOrder
    id_pedido?: SortOrder
    id_usuario_autor?: SortOrder
    dthr_criacao?: SortOrder
    _count?: est_andamento_pedidoCountOrderByAggregateInput
    _avg?: est_andamento_pedidoAvgOrderByAggregateInput
    _max?: est_andamento_pedidoMaxOrderByAggregateInput
    _min?: est_andamento_pedidoMinOrderByAggregateInput
    _sum?: est_andamento_pedidoSumOrderByAggregateInput
  }

  export type est_andamento_pedidoScalarWhereWithAggregatesInput = {
    AND?: est_andamento_pedidoScalarWhereWithAggregatesInput | est_andamento_pedidoScalarWhereWithAggregatesInput[]
    OR?: est_andamento_pedidoScalarWhereWithAggregatesInput[]
    NOT?: est_andamento_pedidoScalarWhereWithAggregatesInput | est_andamento_pedidoScalarWhereWithAggregatesInput[]
    id_est_andamento?: IntWithAggregatesFilter<"est_andamento_pedido"> | number
    id_pedido?: IntWithAggregatesFilter<"est_andamento_pedido"> | number
    id_usuario_autor?: IntWithAggregatesFilter<"est_andamento_pedido"> | number
    dthr_criacao?: DateTimeWithAggregatesFilter<"est_andamento_pedido"> | Date | string
  }

  export type info_cancelamentoWhereInput = {
    AND?: info_cancelamentoWhereInput | info_cancelamentoWhereInput[]
    OR?: info_cancelamentoWhereInput[]
    NOT?: info_cancelamentoWhereInput | info_cancelamentoWhereInput[]
    id_pedido?: IntFilter<"info_cancelamento"> | number
    justificativa?: StringFilter<"info_cancelamento"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }

  export type info_cancelamentoOrderByWithRelationInput = {
    id_pedido?: SortOrder
    justificativa?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    _relevance?: info_cancelamentoOrderByRelevanceInput
  }

  export type info_cancelamentoWhereUniqueInput = Prisma.AtLeast<{
    id_pedido?: number
    AND?: info_cancelamentoWhereInput | info_cancelamentoWhereInput[]
    OR?: info_cancelamentoWhereInput[]
    NOT?: info_cancelamentoWhereInput | info_cancelamentoWhereInput[]
    justificativa?: StringFilter<"info_cancelamento"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }, "id_pedido">

  export type info_cancelamentoOrderByWithAggregationInput = {
    id_pedido?: SortOrder
    justificativa?: SortOrder
    _count?: info_cancelamentoCountOrderByAggregateInput
    _avg?: info_cancelamentoAvgOrderByAggregateInput
    _max?: info_cancelamentoMaxOrderByAggregateInput
    _min?: info_cancelamentoMinOrderByAggregateInput
    _sum?: info_cancelamentoSumOrderByAggregateInput
  }

  export type info_cancelamentoScalarWhereWithAggregatesInput = {
    AND?: info_cancelamentoScalarWhereWithAggregatesInput | info_cancelamentoScalarWhereWithAggregatesInput[]
    OR?: info_cancelamentoScalarWhereWithAggregatesInput[]
    NOT?: info_cancelamentoScalarWhereWithAggregatesInput | info_cancelamentoScalarWhereWithAggregatesInput[]
    id_pedido?: IntWithAggregatesFilter<"info_cancelamento"> | number
    justificativa?: StringWithAggregatesFilter<"info_cancelamento"> | string
  }

  export type info_pagamentoWhereInput = {
    AND?: info_pagamentoWhereInput | info_pagamentoWhereInput[]
    OR?: info_pagamentoWhereInput[]
    NOT?: info_pagamentoWhereInput | info_pagamentoWhereInput[]
    id_pedido?: IntFilter<"info_pagamento"> | number
    dt_vencimento?: DateTimeNullableFilter<"info_pagamento"> | Date | string | null
    dt_pago?: DateTimeNullableFilter<"info_pagamento"> | Date | string | null
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }

  export type info_pagamentoOrderByWithRelationInput = {
    id_pedido?: SortOrder
    dt_vencimento?: SortOrderInput | SortOrder
    dt_pago?: SortOrderInput | SortOrder
    pedido?: pedidoOrderByWithRelationInput
  }

  export type info_pagamentoWhereUniqueInput = Prisma.AtLeast<{
    id_pedido?: number
    AND?: info_pagamentoWhereInput | info_pagamentoWhereInput[]
    OR?: info_pagamentoWhereInput[]
    NOT?: info_pagamentoWhereInput | info_pagamentoWhereInput[]
    dt_vencimento?: DateTimeNullableFilter<"info_pagamento"> | Date | string | null
    dt_pago?: DateTimeNullableFilter<"info_pagamento"> | Date | string | null
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }, "id_pedido">

  export type info_pagamentoOrderByWithAggregationInput = {
    id_pedido?: SortOrder
    dt_vencimento?: SortOrderInput | SortOrder
    dt_pago?: SortOrderInput | SortOrder
    _count?: info_pagamentoCountOrderByAggregateInput
    _avg?: info_pagamentoAvgOrderByAggregateInput
    _max?: info_pagamentoMaxOrderByAggregateInput
    _min?: info_pagamentoMinOrderByAggregateInput
    _sum?: info_pagamentoSumOrderByAggregateInput
  }

  export type info_pagamentoScalarWhereWithAggregatesInput = {
    AND?: info_pagamentoScalarWhereWithAggregatesInput | info_pagamentoScalarWhereWithAggregatesInput[]
    OR?: info_pagamentoScalarWhereWithAggregatesInput[]
    NOT?: info_pagamentoScalarWhereWithAggregatesInput | info_pagamentoScalarWhereWithAggregatesInput[]
    id_pedido?: IntWithAggregatesFilter<"info_pagamento"> | number
    dt_vencimento?: DateTimeNullableWithAggregatesFilter<"info_pagamento"> | Date | string | null
    dt_pago?: DateTimeNullableWithAggregatesFilter<"info_pagamento"> | Date | string | null
  }

  export type info_pfWhereInput = {
    AND?: info_pfWhereInput | info_pfWhereInput[]
    OR?: info_pfWhereInput[]
    NOT?: info_pfWhereInput | info_pfWhereInput[]
    id_pedido?: IntFilter<"info_pf"> | number
    nome_cliente?: StringFilter<"info_pf"> | string
    cpf?: StringFilter<"info_pf"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }

  export type info_pfOrderByWithRelationInput = {
    id_pedido?: SortOrder
    nome_cliente?: SortOrder
    cpf?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    _relevance?: info_pfOrderByRelevanceInput
  }

  export type info_pfWhereUniqueInput = Prisma.AtLeast<{
    id_pedido?: number
    AND?: info_pfWhereInput | info_pfWhereInput[]
    OR?: info_pfWhereInput[]
    NOT?: info_pfWhereInput | info_pfWhereInput[]
    nome_cliente?: StringFilter<"info_pf"> | string
    cpf?: StringFilter<"info_pf"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }, "id_pedido">

  export type info_pfOrderByWithAggregationInput = {
    id_pedido?: SortOrder
    nome_cliente?: SortOrder
    cpf?: SortOrder
    _count?: info_pfCountOrderByAggregateInput
    _avg?: info_pfAvgOrderByAggregateInput
    _max?: info_pfMaxOrderByAggregateInput
    _min?: info_pfMinOrderByAggregateInput
    _sum?: info_pfSumOrderByAggregateInput
  }

  export type info_pfScalarWhereWithAggregatesInput = {
    AND?: info_pfScalarWhereWithAggregatesInput | info_pfScalarWhereWithAggregatesInput[]
    OR?: info_pfScalarWhereWithAggregatesInput[]
    NOT?: info_pfScalarWhereWithAggregatesInput | info_pfScalarWhereWithAggregatesInput[]
    id_pedido?: IntWithAggregatesFilter<"info_pf"> | number
    nome_cliente?: StringWithAggregatesFilter<"info_pf"> | string
    cpf?: StringWithAggregatesFilter<"info_pf"> | string
  }

  export type info_pjWhereInput = {
    AND?: info_pjWhereInput | info_pjWhereInput[]
    OR?: info_pjWhereInput[]
    NOT?: info_pjWhereInput | info_pjWhereInput[]
    id_pedido?: IntFilter<"info_pj"> | number
    cnpj?: StringFilter<"info_pj"> | string
    nome_fantasia?: StringFilter<"info_pj"> | string
    nome_empresarial?: StringFilter<"info_pj"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }

  export type info_pjOrderByWithRelationInput = {
    id_pedido?: SortOrder
    cnpj?: SortOrder
    nome_fantasia?: SortOrder
    nome_empresarial?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    _relevance?: info_pjOrderByRelevanceInput
  }

  export type info_pjWhereUniqueInput = Prisma.AtLeast<{
    id_pedido?: number
    AND?: info_pjWhereInput | info_pjWhereInput[]
    OR?: info_pjWhereInput[]
    NOT?: info_pjWhereInput | info_pjWhereInput[]
    cnpj?: StringFilter<"info_pj"> | string
    nome_fantasia?: StringFilter<"info_pj"> | string
    nome_empresarial?: StringFilter<"info_pj"> | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }, "id_pedido">

  export type info_pjOrderByWithAggregationInput = {
    id_pedido?: SortOrder
    cnpj?: SortOrder
    nome_fantasia?: SortOrder
    nome_empresarial?: SortOrder
    _count?: info_pjCountOrderByAggregateInput
    _avg?: info_pjAvgOrderByAggregateInput
    _max?: info_pjMaxOrderByAggregateInput
    _min?: info_pjMinOrderByAggregateInput
    _sum?: info_pjSumOrderByAggregateInput
  }

  export type info_pjScalarWhereWithAggregatesInput = {
    AND?: info_pjScalarWhereWithAggregatesInput | info_pjScalarWhereWithAggregatesInput[]
    OR?: info_pjScalarWhereWithAggregatesInput[]
    NOT?: info_pjScalarWhereWithAggregatesInput | info_pjScalarWhereWithAggregatesInput[]
    id_pedido?: IntWithAggregatesFilter<"info_pj"> | number
    cnpj?: StringWithAggregatesFilter<"info_pj"> | string
    nome_fantasia?: StringWithAggregatesFilter<"info_pj"> | string
    nome_empresarial?: StringWithAggregatesFilter<"info_pj"> | string
  }

  export type intercorrenciaWhereInput = {
    AND?: intercorrenciaWhereInput | intercorrenciaWhereInput[]
    OR?: intercorrenciaWhereInput[]
    NOT?: intercorrenciaWhereInput | intercorrenciaWhereInput[]
    id_intercorrencia?: IntFilter<"intercorrencia"> | number
    id_pedido?: IntFilter<"intercorrencia"> | number
    descricao?: StringFilter<"intercorrencia"> | string
    dthr_criacao?: DateTimeFilter<"intercorrencia"> | Date | string
    id_usuario_autor?: IntFilter<"intercorrencia"> | number
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type intercorrenciaOrderByWithRelationInput = {
    id_intercorrencia?: SortOrder
    id_pedido?: SortOrder
    descricao?: SortOrder
    dthr_criacao?: SortOrder
    id_usuario_autor?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
    _relevance?: intercorrenciaOrderByRelevanceInput
  }

  export type intercorrenciaWhereUniqueInput = Prisma.AtLeast<{
    id_intercorrencia_id_pedido_id_usuario_autor?: intercorrenciaId_intercorrenciaId_pedidoId_usuario_autorCompoundUniqueInput
    AND?: intercorrenciaWhereInput | intercorrenciaWhereInput[]
    OR?: intercorrenciaWhereInput[]
    NOT?: intercorrenciaWhereInput | intercorrenciaWhereInput[]
    id_intercorrencia?: IntFilter<"intercorrencia"> | number
    id_pedido?: IntFilter<"intercorrencia"> | number
    descricao?: StringFilter<"intercorrencia"> | string
    dthr_criacao?: DateTimeFilter<"intercorrencia"> | Date | string
    id_usuario_autor?: IntFilter<"intercorrencia"> | number
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id_intercorrencia_id_pedido_id_usuario_autor">

  export type intercorrenciaOrderByWithAggregationInput = {
    id_intercorrencia?: SortOrder
    id_pedido?: SortOrder
    descricao?: SortOrder
    dthr_criacao?: SortOrder
    id_usuario_autor?: SortOrder
    _count?: intercorrenciaCountOrderByAggregateInput
    _avg?: intercorrenciaAvgOrderByAggregateInput
    _max?: intercorrenciaMaxOrderByAggregateInput
    _min?: intercorrenciaMinOrderByAggregateInput
    _sum?: intercorrenciaSumOrderByAggregateInput
  }

  export type intercorrenciaScalarWhereWithAggregatesInput = {
    AND?: intercorrenciaScalarWhereWithAggregatesInput | intercorrenciaScalarWhereWithAggregatesInput[]
    OR?: intercorrenciaScalarWhereWithAggregatesInput[]
    NOT?: intercorrenciaScalarWhereWithAggregatesInput | intercorrenciaScalarWhereWithAggregatesInput[]
    id_intercorrencia?: IntWithAggregatesFilter<"intercorrencia"> | number
    id_pedido?: IntWithAggregatesFilter<"intercorrencia"> | number
    descricao?: StringWithAggregatesFilter<"intercorrencia"> | string
    dthr_criacao?: DateTimeWithAggregatesFilter<"intercorrencia"> | Date | string
    id_usuario_autor?: IntWithAggregatesFilter<"intercorrencia"> | number
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id?: IntFilter<"pedido"> | number
    id_cliente?: IntFilter<"pedido"> | number
    id_usuario_autor?: IntFilter<"pedido"> | number
    dthr_criacao?: DateTimeFilter<"pedido"> | Date | string
    id_usuario_alt?: IntNullableFilter<"pedido"> | number | null
    dthr_alt?: DateTimeNullableFilter<"pedido"> | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFilter<"pedido"> | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFilter<"pedido"> | Date | string
    preco_frete?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFilter<"pedido"> | number
    preco_final?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: DateTimeNullableFilter<"pedido"> | Date | string | null
    dt_pago?: DateTimeNullableFilter<"pedido"> | Date | string | null
    preco_custo_total?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    destinatario?: XOR<DestinatarioNullableScalarRelationFilter, destinatarioWhereInput> | null
    destino?: XOR<DestinoNullableScalarRelationFilter, destinoWhereInput> | null
    est_andamento_pedido?: Est_andamento_pedidoListRelationFilter
    info_cancelamento?: XOR<Info_cancelamentoNullableScalarRelationFilter, info_cancelamentoWhereInput> | null
    info_pagamento?: XOR<Info_pagamentoNullableScalarRelationFilter, info_pagamentoWhereInput> | null
    info_pf?: XOR<Info_pfNullableScalarRelationFilter, info_pfWhereInput> | null
    info_pj?: XOR<Info_pjNullableScalarRelationFilter, info_pjWhereInput> | null
    intercorrencia?: IntercorrenciaListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    produto_pedido?: Produto_pedidoListRelationFilter
  }

  export type pedidoOrderByWithRelationInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_usuario_autor?: SortOrder
    dthr_criacao?: SortOrder
    id_usuario_alt?: SortOrderInput | SortOrder
    dthr_alt?: SortOrderInput | SortOrder
    tipo_entrega?: SortOrder
    dthr_entregar?: SortOrder
    preco_frete?: SortOrder
    tx_desconto?: SortOrder
    preco_final?: SortOrder
    dt_venc_pagamento?: SortOrderInput | SortOrder
    dt_pago?: SortOrderInput | SortOrder
    preco_custo_total?: SortOrder
    destinatario?: destinatarioOrderByWithRelationInput
    destino?: destinoOrderByWithRelationInput
    est_andamento_pedido?: est_andamento_pedidoOrderByRelationAggregateInput
    info_cancelamento?: info_cancelamentoOrderByWithRelationInput
    info_pagamento?: info_pagamentoOrderByWithRelationInput
    info_pf?: info_pfOrderByWithRelationInput
    info_pj?: info_pjOrderByWithRelationInput
    intercorrencia?: intercorrenciaOrderByRelationAggregateInput
    cliente?: clienteOrderByWithRelationInput
    produto_pedido?: produto_pedidoOrderByRelationAggregateInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id_cliente?: IntFilter<"pedido"> | number
    id_usuario_autor?: IntFilter<"pedido"> | number
    dthr_criacao?: DateTimeFilter<"pedido"> | Date | string
    id_usuario_alt?: IntNullableFilter<"pedido"> | number | null
    dthr_alt?: DateTimeNullableFilter<"pedido"> | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFilter<"pedido"> | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFilter<"pedido"> | Date | string
    preco_frete?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFilter<"pedido"> | number
    preco_final?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: DateTimeNullableFilter<"pedido"> | Date | string | null
    dt_pago?: DateTimeNullableFilter<"pedido"> | Date | string | null
    preco_custo_total?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    destinatario?: XOR<DestinatarioNullableScalarRelationFilter, destinatarioWhereInput> | null
    destino?: XOR<DestinoNullableScalarRelationFilter, destinoWhereInput> | null
    est_andamento_pedido?: Est_andamento_pedidoListRelationFilter
    info_cancelamento?: XOR<Info_cancelamentoNullableScalarRelationFilter, info_cancelamentoWhereInput> | null
    info_pagamento?: XOR<Info_pagamentoNullableScalarRelationFilter, info_pagamentoWhereInput> | null
    info_pf?: XOR<Info_pfNullableScalarRelationFilter, info_pfWhereInput> | null
    info_pj?: XOR<Info_pjNullableScalarRelationFilter, info_pjWhereInput> | null
    intercorrencia?: IntercorrenciaListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    produto_pedido?: Produto_pedidoListRelationFilter
  }, "id">

  export type pedidoOrderByWithAggregationInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_usuario_autor?: SortOrder
    dthr_criacao?: SortOrder
    id_usuario_alt?: SortOrderInput | SortOrder
    dthr_alt?: SortOrderInput | SortOrder
    tipo_entrega?: SortOrder
    dthr_entregar?: SortOrder
    preco_frete?: SortOrder
    tx_desconto?: SortOrder
    preco_final?: SortOrder
    dt_venc_pagamento?: SortOrderInput | SortOrder
    dt_pago?: SortOrderInput | SortOrder
    preco_custo_total?: SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido"> | number
    id_cliente?: IntWithAggregatesFilter<"pedido"> | number
    id_usuario_autor?: IntWithAggregatesFilter<"pedido"> | number
    dthr_criacao?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
    id_usuario_alt?: IntNullableWithAggregatesFilter<"pedido"> | number | null
    dthr_alt?: DateTimeNullableWithAggregatesFilter<"pedido"> | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaWithAggregatesFilter<"pedido"> | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
    preco_frete?: DecimalWithAggregatesFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntWithAggregatesFilter<"pedido"> | number
    preco_final?: DecimalWithAggregatesFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: DateTimeNullableWithAggregatesFilter<"pedido"> | Date | string | null
    dt_pago?: DateTimeNullableWithAggregatesFilter<"pedido"> | Date | string | null
    preco_custo_total?: DecimalWithAggregatesFilter<"pedido"> | Decimal | DecimalJsLike | number | string
  }

  export type produtoWhereInput = {
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    id?: IntFilter<"produto"> | number
    id_categoria?: IntFilter<"produto"> | number
    id_unidade?: IntFilter<"produto"> | number
    nome?: StringFilter<"produto"> | string
    preco_venda?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: IntNullableFilter<"produto"> | number | null
    dthr_alt?: DateTimeNullableFilter<"produto"> | Date | string | null
    estado?: BoolFilter<"produto"> | boolean
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
    unidade?: XOR<UnidadeScalarRelationFilter, unidadeWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    produto_pedido?: Produto_pedidoListRelationFilter
  }

  export type produtoOrderByWithRelationInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_unidade?: SortOrder
    nome?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    id_usuario_alt?: SortOrderInput | SortOrder
    dthr_alt?: SortOrderInput | SortOrder
    estado?: SortOrder
    categoria?: categoriaOrderByWithRelationInput
    unidade?: unidadeOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
    produto_pedido?: produto_pedidoOrderByRelationAggregateInput
    _relevance?: produtoOrderByRelevanceInput
  }

  export type produtoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    id_categoria?: IntFilter<"produto"> | number
    id_unidade?: IntFilter<"produto"> | number
    nome?: StringFilter<"produto"> | string
    preco_venda?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: IntNullableFilter<"produto"> | number | null
    dthr_alt?: DateTimeNullableFilter<"produto"> | Date | string | null
    estado?: BoolFilter<"produto"> | boolean
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
    unidade?: XOR<UnidadeScalarRelationFilter, unidadeWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    produto_pedido?: Produto_pedidoListRelationFilter
  }, "id">

  export type produtoOrderByWithAggregationInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_unidade?: SortOrder
    nome?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    id_usuario_alt?: SortOrderInput | SortOrder
    dthr_alt?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: produtoCountOrderByAggregateInput
    _avg?: produtoAvgOrderByAggregateInput
    _max?: produtoMaxOrderByAggregateInput
    _min?: produtoMinOrderByAggregateInput
    _sum?: produtoSumOrderByAggregateInput
  }

  export type produtoScalarWhereWithAggregatesInput = {
    AND?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    OR?: produtoScalarWhereWithAggregatesInput[]
    NOT?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produto"> | number
    id_categoria?: IntWithAggregatesFilter<"produto"> | number
    id_unidade?: IntWithAggregatesFilter<"produto"> | number
    nome?: StringWithAggregatesFilter<"produto"> | string
    preco_venda?: DecimalWithAggregatesFilter<"produto"> | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalWithAggregatesFilter<"produto"> | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: IntNullableWithAggregatesFilter<"produto"> | number | null
    dthr_alt?: DateTimeNullableWithAggregatesFilter<"produto"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"produto"> | boolean
  }

  export type produto_pedidoWhereInput = {
    AND?: produto_pedidoWhereInput | produto_pedidoWhereInput[]
    OR?: produto_pedidoWhereInput[]
    NOT?: produto_pedidoWhereInput | produto_pedidoWhereInput[]
    id_produto?: IntFilter<"produto_pedido"> | number
    id_pedido?: IntFilter<"produto_pedido"> | number
    quantidade?: IntFilter<"produto_pedido"> | number
    preco_venda?: DecimalFilter<"produto_pedido"> | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFilter<"produto_pedido"> | Decimal | DecimalJsLike | number | string
    info_adicional?: StringNullableFilter<"produto_pedido"> | string | null
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }

  export type produto_pedidoOrderByWithRelationInput = {
    id_produto?: SortOrder
    id_pedido?: SortOrder
    quantidade?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    info_adicional?: SortOrderInput | SortOrder
    pedido?: pedidoOrderByWithRelationInput
    produto?: produtoOrderByWithRelationInput
    _relevance?: produto_pedidoOrderByRelevanceInput
  }

  export type produto_pedidoWhereUniqueInput = Prisma.AtLeast<{
    id_produto_id_pedido?: produto_pedidoId_produtoId_pedidoCompoundUniqueInput
    AND?: produto_pedidoWhereInput | produto_pedidoWhereInput[]
    OR?: produto_pedidoWhereInput[]
    NOT?: produto_pedidoWhereInput | produto_pedidoWhereInput[]
    id_produto?: IntFilter<"produto_pedido"> | number
    id_pedido?: IntFilter<"produto_pedido"> | number
    quantidade?: IntFilter<"produto_pedido"> | number
    preco_venda?: DecimalFilter<"produto_pedido"> | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFilter<"produto_pedido"> | Decimal | DecimalJsLike | number | string
    info_adicional?: StringNullableFilter<"produto_pedido"> | string | null
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }, "id_produto_id_pedido">

  export type produto_pedidoOrderByWithAggregationInput = {
    id_produto?: SortOrder
    id_pedido?: SortOrder
    quantidade?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    info_adicional?: SortOrderInput | SortOrder
    _count?: produto_pedidoCountOrderByAggregateInput
    _avg?: produto_pedidoAvgOrderByAggregateInput
    _max?: produto_pedidoMaxOrderByAggregateInput
    _min?: produto_pedidoMinOrderByAggregateInput
    _sum?: produto_pedidoSumOrderByAggregateInput
  }

  export type produto_pedidoScalarWhereWithAggregatesInput = {
    AND?: produto_pedidoScalarWhereWithAggregatesInput | produto_pedidoScalarWhereWithAggregatesInput[]
    OR?: produto_pedidoScalarWhereWithAggregatesInput[]
    NOT?: produto_pedidoScalarWhereWithAggregatesInput | produto_pedidoScalarWhereWithAggregatesInput[]
    id_produto?: IntWithAggregatesFilter<"produto_pedido"> | number
    id_pedido?: IntWithAggregatesFilter<"produto_pedido"> | number
    quantidade?: IntWithAggregatesFilter<"produto_pedido"> | number
    preco_venda?: DecimalWithAggregatesFilter<"produto_pedido"> | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalWithAggregatesFilter<"produto_pedido"> | Decimal | DecimalJsLike | number | string
    info_adicional?: StringNullableWithAggregatesFilter<"produto_pedido"> | string | null
  }

  export type unidadeWhereInput = {
    AND?: unidadeWhereInput | unidadeWhereInput[]
    OR?: unidadeWhereInput[]
    NOT?: unidadeWhereInput | unidadeWhereInput[]
    id?: IntFilter<"unidade"> | number
    nome?: StringFilter<"unidade"> | string
    abreviacao?: StringFilter<"unidade"> | string
    produto?: ProdutoListRelationFilter
  }

  export type unidadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    abreviacao?: SortOrder
    produto?: produtoOrderByRelationAggregateInput
    _relevance?: unidadeOrderByRelevanceInput
  }

  export type unidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: unidadeWhereInput | unidadeWhereInput[]
    OR?: unidadeWhereInput[]
    NOT?: unidadeWhereInput | unidadeWhereInput[]
    nome?: StringFilter<"unidade"> | string
    abreviacao?: StringFilter<"unidade"> | string
    produto?: ProdutoListRelationFilter
  }, "id">

  export type unidadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    abreviacao?: SortOrder
    _count?: unidadeCountOrderByAggregateInput
    _avg?: unidadeAvgOrderByAggregateInput
    _max?: unidadeMaxOrderByAggregateInput
    _min?: unidadeMinOrderByAggregateInput
    _sum?: unidadeSumOrderByAggregateInput
  }

  export type unidadeScalarWhereWithAggregatesInput = {
    AND?: unidadeScalarWhereWithAggregatesInput | unidadeScalarWhereWithAggregatesInput[]
    OR?: unidadeScalarWhereWithAggregatesInput[]
    NOT?: unidadeScalarWhereWithAggregatesInput | unidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"unidade"> | number
    nome?: StringWithAggregatesFilter<"unidade"> | string
    abreviacao?: StringWithAggregatesFilter<"unidade"> | string
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    nome?: StringFilter<"usuario"> | string
    login?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    tipo?: Enumusuario_tipoFilter<"usuario"> | $Enums.usuario_tipo
    cliente?: ClienteListRelationFilter
    intercorrencia?: IntercorrenciaListRelationFilter
    produto?: ProdutoListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    cliente?: clienteOrderByRelationAggregateInput
    intercorrencia?: intercorrenciaOrderByRelationAggregateInput
    produto?: produtoOrderByRelationAggregateInput
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    login?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nome?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    tipo?: Enumusuario_tipoFilter<"usuario"> | $Enums.usuario_tipo
    cliente?: ClienteListRelationFilter
    intercorrencia?: IntercorrenciaListRelationFilter
    produto?: ProdutoListRelationFilter
  }, "id" | "login">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    nome?: StringWithAggregatesFilter<"usuario"> | string
    login?: StringWithAggregatesFilter<"usuario"> | string
    senha?: StringWithAggregatesFilter<"usuario"> | string
    tipo?: Enumusuario_tipoWithAggregatesFilter<"usuario"> | $Enums.usuario_tipo
  }

  export type categoriaCreateInput = {
    nome: string
    descricao?: string | null
    produto?: produtoCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    produto?: produtoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: produtoUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: produtoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type categoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteCreateInput = {
    nome: string
    telefone: string
    dthr_alt?: Date | string | null
    usuario?: usuarioCreateNestedOneWithoutClienteInput
    pedido?: pedidoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateInput = {
    id?: number
    nome: string
    telefone: string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    pedido?: pedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneWithoutClienteNestedInput
    pedido?: pedidoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido?: pedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteCreateManyInput = {
    id?: number
    nome: string
    telefone: string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
  }

  export type clienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type destinatarioCreateInput = {
    info: string
    pedido: pedidoCreateNestedOneWithoutDestinatarioInput
  }

  export type destinatarioUncheckedCreateInput = {
    id_pedido: number
    info: string
  }

  export type destinatarioUpdateInput = {
    info?: StringFieldUpdateOperationsInput | string
    pedido?: pedidoUpdateOneRequiredWithoutDestinatarioNestedInput
  }

  export type destinatarioUncheckedUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    info?: StringFieldUpdateOperationsInput | string
  }

  export type destinatarioCreateManyInput = {
    id_pedido: number
    info: string
  }

  export type destinatarioUpdateManyMutationInput = {
    info?: StringFieldUpdateOperationsInput | string
  }

  export type destinatarioUncheckedUpdateManyInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    info?: StringFieldUpdateOperationsInput | string
  }

  export type destinoCreateInput = {
    logradouro: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    pais: string
    pedido: pedidoCreateNestedOneWithoutDestinoInput
  }

  export type destinoUncheckedCreateInput = {
    id_pedido: number
    logradouro: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    pais: string
  }

  export type destinoUpdateInput = {
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    pedido?: pedidoUpdateOneRequiredWithoutDestinoNestedInput
  }

  export type destinoUncheckedUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
  }

  export type destinoCreateManyInput = {
    id_pedido: number
    logradouro: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    pais: string
  }

  export type destinoUpdateManyMutationInput = {
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
  }

  export type destinoUncheckedUpdateManyInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
  }

  export type est_andamentoCreateInput = {
    nome: string
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutEst_andamentoInput
  }

  export type est_andamentoUncheckedCreateInput = {
    id?: number
    nome: string
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutEst_andamentoInput
  }

  export type est_andamentoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutEst_andamentoNestedInput
  }

  export type est_andamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutEst_andamentoNestedInput
  }

  export type est_andamentoCreateManyInput = {
    id?: number
    nome: string
  }

  export type est_andamentoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type est_andamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type est_andamento_pedidoCreateInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    pedido: pedidoCreateNestedOneWithoutEst_andamento_pedidoInput
    est_andamento: est_andamentoCreateNestedOneWithoutEst_andamento_pedidoInput
  }

  export type est_andamento_pedidoUncheckedCreateInput = {
    id_est_andamento: number
    id_pedido: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
  }

  export type est_andamento_pedidoUpdateInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateOneRequiredWithoutEst_andamento_pedidoNestedInput
    est_andamento?: est_andamentoUpdateOneRequiredWithoutEst_andamento_pedidoNestedInput
  }

  export type est_andamento_pedidoUncheckedUpdateInput = {
    id_est_andamento?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type est_andamento_pedidoCreateManyInput = {
    id_est_andamento: number
    id_pedido: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
  }

  export type est_andamento_pedidoUpdateManyMutationInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type est_andamento_pedidoUncheckedUpdateManyInput = {
    id_est_andamento?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type info_cancelamentoCreateInput = {
    justificativa: string
    pedido: pedidoCreateNestedOneWithoutInfo_cancelamentoInput
  }

  export type info_cancelamentoUncheckedCreateInput = {
    id_pedido: number
    justificativa: string
  }

  export type info_cancelamentoUpdateInput = {
    justificativa?: StringFieldUpdateOperationsInput | string
    pedido?: pedidoUpdateOneRequiredWithoutInfo_cancelamentoNestedInput
  }

  export type info_cancelamentoUncheckedUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    justificativa?: StringFieldUpdateOperationsInput | string
  }

  export type info_cancelamentoCreateManyInput = {
    id_pedido: number
    justificativa: string
  }

  export type info_cancelamentoUpdateManyMutationInput = {
    justificativa?: StringFieldUpdateOperationsInput | string
  }

  export type info_cancelamentoUncheckedUpdateManyInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    justificativa?: StringFieldUpdateOperationsInput | string
  }

  export type info_pagamentoCreateInput = {
    dt_vencimento?: Date | string | null
    dt_pago?: Date | string | null
    pedido: pedidoCreateNestedOneWithoutInfo_pagamentoInput
  }

  export type info_pagamentoUncheckedCreateInput = {
    id_pedido: number
    dt_vencimento?: Date | string | null
    dt_pago?: Date | string | null
  }

  export type info_pagamentoUpdateInput = {
    dt_vencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido?: pedidoUpdateOneRequiredWithoutInfo_pagamentoNestedInput
  }

  export type info_pagamentoUncheckedUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    dt_vencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type info_pagamentoCreateManyInput = {
    id_pedido: number
    dt_vencimento?: Date | string | null
    dt_pago?: Date | string | null
  }

  export type info_pagamentoUpdateManyMutationInput = {
    dt_vencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type info_pagamentoUncheckedUpdateManyInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    dt_vencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type info_pfCreateInput = {
    nome_cliente: string
    cpf: string
    pedido: pedidoCreateNestedOneWithoutInfo_pfInput
  }

  export type info_pfUncheckedCreateInput = {
    id_pedido: number
    nome_cliente: string
    cpf: string
  }

  export type info_pfUpdateInput = {
    nome_cliente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    pedido?: pedidoUpdateOneRequiredWithoutInfo_pfNestedInput
  }

  export type info_pfUncheckedUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    nome_cliente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type info_pfCreateManyInput = {
    id_pedido: number
    nome_cliente: string
    cpf: string
  }

  export type info_pfUpdateManyMutationInput = {
    nome_cliente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type info_pfUncheckedUpdateManyInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    nome_cliente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type info_pjCreateInput = {
    cnpj: string
    nome_fantasia: string
    nome_empresarial: string
    pedido: pedidoCreateNestedOneWithoutInfo_pjInput
  }

  export type info_pjUncheckedCreateInput = {
    id_pedido: number
    cnpj: string
    nome_fantasia: string
    nome_empresarial: string
  }

  export type info_pjUpdateInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    nome_empresarial?: StringFieldUpdateOperationsInput | string
    pedido?: pedidoUpdateOneRequiredWithoutInfo_pjNestedInput
  }

  export type info_pjUncheckedUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    nome_empresarial?: StringFieldUpdateOperationsInput | string
  }

  export type info_pjCreateManyInput = {
    id_pedido: number
    cnpj: string
    nome_fantasia: string
    nome_empresarial: string
  }

  export type info_pjUpdateManyMutationInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    nome_empresarial?: StringFieldUpdateOperationsInput | string
  }

  export type info_pjUncheckedUpdateManyInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    nome_empresarial?: StringFieldUpdateOperationsInput | string
  }

  export type intercorrenciaCreateInput = {
    id_intercorrencia: number
    descricao: string
    dthr_criacao?: Date | string
    pedido: pedidoCreateNestedOneWithoutIntercorrenciaInput
    usuario: usuarioCreateNestedOneWithoutIntercorrenciaInput
  }

  export type intercorrenciaUncheckedCreateInput = {
    id_intercorrencia: number
    id_pedido: number
    descricao: string
    dthr_criacao?: Date | string
    id_usuario_autor: number
  }

  export type intercorrenciaUpdateInput = {
    id_intercorrencia?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateOneRequiredWithoutIntercorrenciaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutIntercorrenciaNestedInput
  }

  export type intercorrenciaUncheckedUpdateInput = {
    id_intercorrencia?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
  }

  export type intercorrenciaCreateManyInput = {
    id_intercorrencia: number
    id_pedido: number
    descricao: string
    dthr_criacao?: Date | string
    id_usuario_autor: number
  }

  export type intercorrenciaUpdateManyMutationInput = {
    id_intercorrencia?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intercorrenciaUncheckedUpdateManyInput = {
    id_intercorrencia?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoCreateInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioCreateNestedOneWithoutPedidoInput
    destino?: destinoCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutPedidoInput
    cliente: clienteCreateNestedOneWithoutPedidoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedCreateNestedOneWithoutPedidoInput
    destino?: destinoUncheckedCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfUncheckedCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjUncheckedCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUpdateInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUpdateOneWithoutPedidoNestedInput
    destino?: destinoUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedUpdateOneWithoutPedidoNestedInput
    destino?: destinoUncheckedUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUncheckedUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUncheckedUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateManyInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
  }

  export type pedidoUpdateManyMutationInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type produtoCreateInput = {
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    dthr_alt?: Date | string | null
    estado?: boolean
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    unidade: unidadeCreateNestedOneWithoutProdutoInput
    usuario?: usuarioCreateNestedOneWithoutProdutoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutProdutoInput
  }

  export type produtoUncheckedCreateInput = {
    id?: number
    id_categoria: number
    id_unidade: number
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    estado?: boolean
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    unidade?: unidadeUpdateOneRequiredWithoutProdutoNestedInput
    usuario?: usuarioUpdateOneWithoutProdutoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_unidade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoCreateManyInput = {
    id?: number
    id_categoria: number
    id_unidade: number
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    estado?: boolean
  }

  export type produtoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type produtoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_unidade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type produto_pedidoCreateInput = {
    quantidade: number
    preco_venda: Decimal | DecimalJsLike | number | string
    preco_custo: Decimal | DecimalJsLike | number | string
    info_adicional?: string | null
    pedido: pedidoCreateNestedOneWithoutProduto_pedidoInput
    produto: produtoCreateNestedOneWithoutProduto_pedidoInput
  }

  export type produto_pedidoUncheckedCreateInput = {
    id_produto: number
    id_pedido: number
    quantidade: number
    preco_venda: Decimal | DecimalJsLike | number | string
    preco_custo: Decimal | DecimalJsLike | number | string
    info_adicional?: string | null
  }

  export type produto_pedidoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info_adicional?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: pedidoUpdateOneRequiredWithoutProduto_pedidoNestedInput
    produto?: produtoUpdateOneRequiredWithoutProduto_pedidoNestedInput
  }

  export type produto_pedidoUncheckedUpdateInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info_adicional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produto_pedidoCreateManyInput = {
    id_produto: number
    id_pedido: number
    quantidade: number
    preco_venda: Decimal | DecimalJsLike | number | string
    preco_custo: Decimal | DecimalJsLike | number | string
    info_adicional?: string | null
  }

  export type produto_pedidoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info_adicional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produto_pedidoUncheckedUpdateManyInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info_adicional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type unidadeCreateInput = {
    nome: string
    abreviacao: string
    produto?: produtoCreateNestedManyWithoutUnidadeInput
  }

  export type unidadeUncheckedCreateInput = {
    id?: number
    nome: string
    abreviacao: string
    produto?: produtoUncheckedCreateNestedManyWithoutUnidadeInput
  }

  export type unidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
    produto?: produtoUpdateManyWithoutUnidadeNestedInput
  }

  export type unidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
    produto?: produtoUncheckedUpdateManyWithoutUnidadeNestedInput
  }

  export type unidadeCreateManyInput = {
    id?: number
    nome: string
    abreviacao: string
  }

  export type unidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
  }

  export type unidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateInput = {
    nome: string
    login: string
    senha: string
    tipo: $Enums.usuario_tipo
    cliente?: clienteCreateNestedManyWithoutUsuarioInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutUsuarioInput
    produto?: produtoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    nome: string
    login: string
    senha: string
    tipo: $Enums.usuario_tipo
    cliente?: clienteUncheckedCreateNestedManyWithoutUsuarioInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutUsuarioInput
    produto?: produtoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    cliente?: clienteUpdateManyWithoutUsuarioNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutUsuarioNestedInput
    produto?: produtoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    cliente?: clienteUncheckedUpdateManyWithoutUsuarioNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutUsuarioNestedInput
    produto?: produtoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    nome: string
    login: string
    senha: string
    tipo: $Enums.usuario_tipo
  }

  export type usuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProdutoListRelationFilter = {
    every?: produtoWhereInput
    some?: produtoWhereInput
    none?: produtoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type produtoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaOrderByRelevanceInput = {
    fields: categoriaOrderByRelevanceFieldEnum | categoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: usuarioWhereInput | null
    isNot?: usuarioWhereInput | null
  }

  export type PedidoListRelationFilter = {
    every?: pedidoWhereInput
    some?: pedidoWhereInput
    none?: pedidoWhereInput
  }

  export type pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clienteOrderByRelevanceInput = {
    fields: clienteOrderByRelevanceFieldEnum | clienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    id_usuario_alt?: SortOrder
    dthr_alt?: SortOrder
  }

  export type clienteAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario_alt?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    id_usuario_alt?: SortOrder
    dthr_alt?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    id_usuario_alt?: SortOrder
    dthr_alt?: SortOrder
  }

  export type clienteSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario_alt?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: pedidoWhereInput
    isNot?: pedidoWhereInput
  }

  export type destinatarioOrderByRelevanceInput = {
    fields: destinatarioOrderByRelevanceFieldEnum | destinatarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type destinatarioCountOrderByAggregateInput = {
    id_pedido?: SortOrder
    info?: SortOrder
  }

  export type destinatarioAvgOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type destinatarioMaxOrderByAggregateInput = {
    id_pedido?: SortOrder
    info?: SortOrder
  }

  export type destinatarioMinOrderByAggregateInput = {
    id_pedido?: SortOrder
    info?: SortOrder
  }

  export type destinatarioSumOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type destinoOrderByRelevanceInput = {
    fields: destinoOrderByRelevanceFieldEnum | destinoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type destinoCountOrderByAggregateInput = {
    id_pedido?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
  }

  export type destinoAvgOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type destinoMaxOrderByAggregateInput = {
    id_pedido?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
  }

  export type destinoMinOrderByAggregateInput = {
    id_pedido?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
  }

  export type destinoSumOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type Est_andamento_pedidoListRelationFilter = {
    every?: est_andamento_pedidoWhereInput
    some?: est_andamento_pedidoWhereInput
    none?: est_andamento_pedidoWhereInput
  }

  export type est_andamento_pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type est_andamentoOrderByRelevanceInput = {
    fields: est_andamentoOrderByRelevanceFieldEnum | est_andamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type est_andamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type est_andamentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type est_andamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type est_andamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type est_andamentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Est_andamentoScalarRelationFilter = {
    is?: est_andamentoWhereInput
    isNot?: est_andamentoWhereInput
  }

  export type est_andamento_pedidoId_est_andamentoId_pedidoCompoundUniqueInput = {
    id_est_andamento: number
    id_pedido: number
  }

  export type est_andamento_pedidoCountOrderByAggregateInput = {
    id_est_andamento?: SortOrder
    id_pedido?: SortOrder
    id_usuario_autor?: SortOrder
    dthr_criacao?: SortOrder
  }

  export type est_andamento_pedidoAvgOrderByAggregateInput = {
    id_est_andamento?: SortOrder
    id_pedido?: SortOrder
    id_usuario_autor?: SortOrder
  }

  export type est_andamento_pedidoMaxOrderByAggregateInput = {
    id_est_andamento?: SortOrder
    id_pedido?: SortOrder
    id_usuario_autor?: SortOrder
    dthr_criacao?: SortOrder
  }

  export type est_andamento_pedidoMinOrderByAggregateInput = {
    id_est_andamento?: SortOrder
    id_pedido?: SortOrder
    id_usuario_autor?: SortOrder
    dthr_criacao?: SortOrder
  }

  export type est_andamento_pedidoSumOrderByAggregateInput = {
    id_est_andamento?: SortOrder
    id_pedido?: SortOrder
    id_usuario_autor?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type info_cancelamentoOrderByRelevanceInput = {
    fields: info_cancelamentoOrderByRelevanceFieldEnum | info_cancelamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type info_cancelamentoCountOrderByAggregateInput = {
    id_pedido?: SortOrder
    justificativa?: SortOrder
  }

  export type info_cancelamentoAvgOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type info_cancelamentoMaxOrderByAggregateInput = {
    id_pedido?: SortOrder
    justificativa?: SortOrder
  }

  export type info_cancelamentoMinOrderByAggregateInput = {
    id_pedido?: SortOrder
    justificativa?: SortOrder
  }

  export type info_cancelamentoSumOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type info_pagamentoCountOrderByAggregateInput = {
    id_pedido?: SortOrder
    dt_vencimento?: SortOrder
    dt_pago?: SortOrder
  }

  export type info_pagamentoAvgOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type info_pagamentoMaxOrderByAggregateInput = {
    id_pedido?: SortOrder
    dt_vencimento?: SortOrder
    dt_pago?: SortOrder
  }

  export type info_pagamentoMinOrderByAggregateInput = {
    id_pedido?: SortOrder
    dt_vencimento?: SortOrder
    dt_pago?: SortOrder
  }

  export type info_pagamentoSumOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type info_pfOrderByRelevanceInput = {
    fields: info_pfOrderByRelevanceFieldEnum | info_pfOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type info_pfCountOrderByAggregateInput = {
    id_pedido?: SortOrder
    nome_cliente?: SortOrder
    cpf?: SortOrder
  }

  export type info_pfAvgOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type info_pfMaxOrderByAggregateInput = {
    id_pedido?: SortOrder
    nome_cliente?: SortOrder
    cpf?: SortOrder
  }

  export type info_pfMinOrderByAggregateInput = {
    id_pedido?: SortOrder
    nome_cliente?: SortOrder
    cpf?: SortOrder
  }

  export type info_pfSumOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type info_pjOrderByRelevanceInput = {
    fields: info_pjOrderByRelevanceFieldEnum | info_pjOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type info_pjCountOrderByAggregateInput = {
    id_pedido?: SortOrder
    cnpj?: SortOrder
    nome_fantasia?: SortOrder
    nome_empresarial?: SortOrder
  }

  export type info_pjAvgOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type info_pjMaxOrderByAggregateInput = {
    id_pedido?: SortOrder
    cnpj?: SortOrder
    nome_fantasia?: SortOrder
    nome_empresarial?: SortOrder
  }

  export type info_pjMinOrderByAggregateInput = {
    id_pedido?: SortOrder
    cnpj?: SortOrder
    nome_fantasia?: SortOrder
    nome_empresarial?: SortOrder
  }

  export type info_pjSumOrderByAggregateInput = {
    id_pedido?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type intercorrenciaOrderByRelevanceInput = {
    fields: intercorrenciaOrderByRelevanceFieldEnum | intercorrenciaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type intercorrenciaId_intercorrenciaId_pedidoId_usuario_autorCompoundUniqueInput = {
    id_intercorrencia: number
    id_pedido: number
    id_usuario_autor: number
  }

  export type intercorrenciaCountOrderByAggregateInput = {
    id_intercorrencia?: SortOrder
    id_pedido?: SortOrder
    descricao?: SortOrder
    dthr_criacao?: SortOrder
    id_usuario_autor?: SortOrder
  }

  export type intercorrenciaAvgOrderByAggregateInput = {
    id_intercorrencia?: SortOrder
    id_pedido?: SortOrder
    id_usuario_autor?: SortOrder
  }

  export type intercorrenciaMaxOrderByAggregateInput = {
    id_intercorrencia?: SortOrder
    id_pedido?: SortOrder
    descricao?: SortOrder
    dthr_criacao?: SortOrder
    id_usuario_autor?: SortOrder
  }

  export type intercorrenciaMinOrderByAggregateInput = {
    id_intercorrencia?: SortOrder
    id_pedido?: SortOrder
    descricao?: SortOrder
    dthr_criacao?: SortOrder
    id_usuario_autor?: SortOrder
  }

  export type intercorrenciaSumOrderByAggregateInput = {
    id_intercorrencia?: SortOrder
    id_pedido?: SortOrder
    id_usuario_autor?: SortOrder
  }

  export type Enumpedido_tipo_entregaFilter<$PrismaModel = never> = {
    equals?: $Enums.pedido_tipo_entrega | Enumpedido_tipo_entregaFieldRefInput<$PrismaModel>
    in?: $Enums.pedido_tipo_entrega[]
    notIn?: $Enums.pedido_tipo_entrega[]
    not?: NestedEnumpedido_tipo_entregaFilter<$PrismaModel> | $Enums.pedido_tipo_entrega
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DestinatarioNullableScalarRelationFilter = {
    is?: destinatarioWhereInput | null
    isNot?: destinatarioWhereInput | null
  }

  export type DestinoNullableScalarRelationFilter = {
    is?: destinoWhereInput | null
    isNot?: destinoWhereInput | null
  }

  export type Info_cancelamentoNullableScalarRelationFilter = {
    is?: info_cancelamentoWhereInput | null
    isNot?: info_cancelamentoWhereInput | null
  }

  export type Info_pagamentoNullableScalarRelationFilter = {
    is?: info_pagamentoWhereInput | null
    isNot?: info_pagamentoWhereInput | null
  }

  export type Info_pfNullableScalarRelationFilter = {
    is?: info_pfWhereInput | null
    isNot?: info_pfWhereInput | null
  }

  export type Info_pjNullableScalarRelationFilter = {
    is?: info_pjWhereInput | null
    isNot?: info_pjWhereInput | null
  }

  export type IntercorrenciaListRelationFilter = {
    every?: intercorrenciaWhereInput
    some?: intercorrenciaWhereInput
    none?: intercorrenciaWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: clienteWhereInput
    isNot?: clienteWhereInput
  }

  export type Produto_pedidoListRelationFilter = {
    every?: produto_pedidoWhereInput
    some?: produto_pedidoWhereInput
    none?: produto_pedidoWhereInput
  }

  export type intercorrenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produto_pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoCountOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_usuario_autor?: SortOrder
    dthr_criacao?: SortOrder
    id_usuario_alt?: SortOrder
    dthr_alt?: SortOrder
    tipo_entrega?: SortOrder
    dthr_entregar?: SortOrder
    preco_frete?: SortOrder
    tx_desconto?: SortOrder
    preco_final?: SortOrder
    dt_venc_pagamento?: SortOrder
    dt_pago?: SortOrder
    preco_custo_total?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_usuario_autor?: SortOrder
    id_usuario_alt?: SortOrder
    preco_frete?: SortOrder
    tx_desconto?: SortOrder
    preco_final?: SortOrder
    preco_custo_total?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_usuario_autor?: SortOrder
    dthr_criacao?: SortOrder
    id_usuario_alt?: SortOrder
    dthr_alt?: SortOrder
    tipo_entrega?: SortOrder
    dthr_entregar?: SortOrder
    preco_frete?: SortOrder
    tx_desconto?: SortOrder
    preco_final?: SortOrder
    dt_venc_pagamento?: SortOrder
    dt_pago?: SortOrder
    preco_custo_total?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_usuario_autor?: SortOrder
    dthr_criacao?: SortOrder
    id_usuario_alt?: SortOrder
    dthr_alt?: SortOrder
    tipo_entrega?: SortOrder
    dthr_entregar?: SortOrder
    preco_frete?: SortOrder
    tx_desconto?: SortOrder
    preco_final?: SortOrder
    dt_venc_pagamento?: SortOrder
    dt_pago?: SortOrder
    preco_custo_total?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_usuario_autor?: SortOrder
    id_usuario_alt?: SortOrder
    preco_frete?: SortOrder
    tx_desconto?: SortOrder
    preco_final?: SortOrder
    preco_custo_total?: SortOrder
  }

  export type Enumpedido_tipo_entregaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pedido_tipo_entrega | Enumpedido_tipo_entregaFieldRefInput<$PrismaModel>
    in?: $Enums.pedido_tipo_entrega[]
    notIn?: $Enums.pedido_tipo_entrega[]
    not?: NestedEnumpedido_tipo_entregaWithAggregatesFilter<$PrismaModel> | $Enums.pedido_tipo_entrega
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpedido_tipo_entregaFilter<$PrismaModel>
    _max?: NestedEnumpedido_tipo_entregaFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoriaScalarRelationFilter = {
    is?: categoriaWhereInput
    isNot?: categoriaWhereInput
  }

  export type UnidadeScalarRelationFilter = {
    is?: unidadeWhereInput
    isNot?: unidadeWhereInput
  }

  export type produtoOrderByRelevanceInput = {
    fields: produtoOrderByRelevanceFieldEnum | produtoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type produtoCountOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_unidade?: SortOrder
    nome?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    id_usuario_alt?: SortOrder
    dthr_alt?: SortOrder
    estado?: SortOrder
  }

  export type produtoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_unidade?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    id_usuario_alt?: SortOrder
  }

  export type produtoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_unidade?: SortOrder
    nome?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    id_usuario_alt?: SortOrder
    dthr_alt?: SortOrder
    estado?: SortOrder
  }

  export type produtoMinOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_unidade?: SortOrder
    nome?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    id_usuario_alt?: SortOrder
    dthr_alt?: SortOrder
    estado?: SortOrder
  }

  export type produtoSumOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_unidade?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    id_usuario_alt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProdutoScalarRelationFilter = {
    is?: produtoWhereInput
    isNot?: produtoWhereInput
  }

  export type produto_pedidoOrderByRelevanceInput = {
    fields: produto_pedidoOrderByRelevanceFieldEnum | produto_pedidoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type produto_pedidoId_produtoId_pedidoCompoundUniqueInput = {
    id_produto: number
    id_pedido: number
  }

  export type produto_pedidoCountOrderByAggregateInput = {
    id_produto?: SortOrder
    id_pedido?: SortOrder
    quantidade?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    info_adicional?: SortOrder
  }

  export type produto_pedidoAvgOrderByAggregateInput = {
    id_produto?: SortOrder
    id_pedido?: SortOrder
    quantidade?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
  }

  export type produto_pedidoMaxOrderByAggregateInput = {
    id_produto?: SortOrder
    id_pedido?: SortOrder
    quantidade?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    info_adicional?: SortOrder
  }

  export type produto_pedidoMinOrderByAggregateInput = {
    id_produto?: SortOrder
    id_pedido?: SortOrder
    quantidade?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
    info_adicional?: SortOrder
  }

  export type produto_pedidoSumOrderByAggregateInput = {
    id_produto?: SortOrder
    id_pedido?: SortOrder
    quantidade?: SortOrder
    preco_venda?: SortOrder
    preco_custo?: SortOrder
  }

  export type unidadeOrderByRelevanceInput = {
    fields: unidadeOrderByRelevanceFieldEnum | unidadeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type unidadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    abreviacao?: SortOrder
  }

  export type unidadeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type unidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    abreviacao?: SortOrder
  }

  export type unidadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    abreviacao?: SortOrder
  }

  export type unidadeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusuario_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo | Enumusuario_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo[]
    notIn?: $Enums.usuario_tipo[]
    not?: NestedEnumusuario_tipoFilter<$PrismaModel> | $Enums.usuario_tipo
  }

  export type ClienteListRelationFilter = {
    every?: clienteWhereInput
    some?: clienteWhereInput
    none?: clienteWhereInput
  }

  export type clienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusuario_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo | Enumusuario_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo[]
    notIn?: $Enums.usuario_tipo[]
    not?: NestedEnumusuario_tipoWithAggregatesFilter<$PrismaModel> | $Enums.usuario_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuario_tipoFilter<$PrismaModel>
    _max?: NestedEnumusuario_tipoFilter<$PrismaModel>
  }

  export type produtoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type produtoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type produtoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutCategoriaInput | produtoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutCategoriaInput | produtoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutCategoriaInput | produtoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type produtoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutCategoriaInput | produtoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutCategoriaInput | produtoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutCategoriaInput | produtoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutClienteInput = {
    create?: XOR<usuarioCreateWithoutClienteInput, usuarioUncheckedCreateWithoutClienteInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutClienteInput
    connect?: usuarioWhereUniqueInput
  }

  export type pedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usuarioUpdateOneWithoutClienteNestedInput = {
    create?: XOR<usuarioCreateWithoutClienteInput, usuarioUncheckedCreateWithoutClienteInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutClienteInput
    upsert?: usuarioUpsertWithoutClienteInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutClienteInput, usuarioUpdateWithoutClienteInput>, usuarioUncheckedUpdateWithoutClienteInput>
  }

  export type pedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutClienteInput | pedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutClienteInput | pedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutClienteInput | pedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutClienteInput | pedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutClienteInput | pedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutClienteInput | pedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pedidoCreateNestedOneWithoutDestinatarioInput = {
    create?: XOR<pedidoCreateWithoutDestinatarioInput, pedidoUncheckedCreateWithoutDestinatarioInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutDestinatarioInput
    connect?: pedidoWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutDestinatarioNestedInput = {
    create?: XOR<pedidoCreateWithoutDestinatarioInput, pedidoUncheckedCreateWithoutDestinatarioInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutDestinatarioInput
    upsert?: pedidoUpsertWithoutDestinatarioInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutDestinatarioInput, pedidoUpdateWithoutDestinatarioInput>, pedidoUncheckedUpdateWithoutDestinatarioInput>
  }

  export type pedidoCreateNestedOneWithoutDestinoInput = {
    create?: XOR<pedidoCreateWithoutDestinoInput, pedidoUncheckedCreateWithoutDestinoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutDestinoInput
    connect?: pedidoWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutDestinoNestedInput = {
    create?: XOR<pedidoCreateWithoutDestinoInput, pedidoUncheckedCreateWithoutDestinoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutDestinoInput
    upsert?: pedidoUpsertWithoutDestinoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutDestinoInput, pedidoUpdateWithoutDestinoInput>, pedidoUncheckedUpdateWithoutDestinoInput>
  }

  export type est_andamento_pedidoCreateNestedManyWithoutEst_andamentoInput = {
    create?: XOR<est_andamento_pedidoCreateWithoutEst_andamentoInput, est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput> | est_andamento_pedidoCreateWithoutEst_andamentoInput[] | est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput[]
    connectOrCreate?: est_andamento_pedidoCreateOrConnectWithoutEst_andamentoInput | est_andamento_pedidoCreateOrConnectWithoutEst_andamentoInput[]
    createMany?: est_andamento_pedidoCreateManyEst_andamentoInputEnvelope
    connect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
  }

  export type est_andamento_pedidoUncheckedCreateNestedManyWithoutEst_andamentoInput = {
    create?: XOR<est_andamento_pedidoCreateWithoutEst_andamentoInput, est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput> | est_andamento_pedidoCreateWithoutEst_andamentoInput[] | est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput[]
    connectOrCreate?: est_andamento_pedidoCreateOrConnectWithoutEst_andamentoInput | est_andamento_pedidoCreateOrConnectWithoutEst_andamentoInput[]
    createMany?: est_andamento_pedidoCreateManyEst_andamentoInputEnvelope
    connect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
  }

  export type est_andamento_pedidoUpdateManyWithoutEst_andamentoNestedInput = {
    create?: XOR<est_andamento_pedidoCreateWithoutEst_andamentoInput, est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput> | est_andamento_pedidoCreateWithoutEst_andamentoInput[] | est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput[]
    connectOrCreate?: est_andamento_pedidoCreateOrConnectWithoutEst_andamentoInput | est_andamento_pedidoCreateOrConnectWithoutEst_andamentoInput[]
    upsert?: est_andamento_pedidoUpsertWithWhereUniqueWithoutEst_andamentoInput | est_andamento_pedidoUpsertWithWhereUniqueWithoutEst_andamentoInput[]
    createMany?: est_andamento_pedidoCreateManyEst_andamentoInputEnvelope
    set?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    disconnect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    delete?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    connect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    update?: est_andamento_pedidoUpdateWithWhereUniqueWithoutEst_andamentoInput | est_andamento_pedidoUpdateWithWhereUniqueWithoutEst_andamentoInput[]
    updateMany?: est_andamento_pedidoUpdateManyWithWhereWithoutEst_andamentoInput | est_andamento_pedidoUpdateManyWithWhereWithoutEst_andamentoInput[]
    deleteMany?: est_andamento_pedidoScalarWhereInput | est_andamento_pedidoScalarWhereInput[]
  }

  export type est_andamento_pedidoUncheckedUpdateManyWithoutEst_andamentoNestedInput = {
    create?: XOR<est_andamento_pedidoCreateWithoutEst_andamentoInput, est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput> | est_andamento_pedidoCreateWithoutEst_andamentoInput[] | est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput[]
    connectOrCreate?: est_andamento_pedidoCreateOrConnectWithoutEst_andamentoInput | est_andamento_pedidoCreateOrConnectWithoutEst_andamentoInput[]
    upsert?: est_andamento_pedidoUpsertWithWhereUniqueWithoutEst_andamentoInput | est_andamento_pedidoUpsertWithWhereUniqueWithoutEst_andamentoInput[]
    createMany?: est_andamento_pedidoCreateManyEst_andamentoInputEnvelope
    set?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    disconnect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    delete?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    connect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    update?: est_andamento_pedidoUpdateWithWhereUniqueWithoutEst_andamentoInput | est_andamento_pedidoUpdateWithWhereUniqueWithoutEst_andamentoInput[]
    updateMany?: est_andamento_pedidoUpdateManyWithWhereWithoutEst_andamentoInput | est_andamento_pedidoUpdateManyWithWhereWithoutEst_andamentoInput[]
    deleteMany?: est_andamento_pedidoScalarWhereInput | est_andamento_pedidoScalarWhereInput[]
  }

  export type pedidoCreateNestedOneWithoutEst_andamento_pedidoInput = {
    create?: XOR<pedidoCreateWithoutEst_andamento_pedidoInput, pedidoUncheckedCreateWithoutEst_andamento_pedidoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutEst_andamento_pedidoInput
    connect?: pedidoWhereUniqueInput
  }

  export type est_andamentoCreateNestedOneWithoutEst_andamento_pedidoInput = {
    create?: XOR<est_andamentoCreateWithoutEst_andamento_pedidoInput, est_andamentoUncheckedCreateWithoutEst_andamento_pedidoInput>
    connectOrCreate?: est_andamentoCreateOrConnectWithoutEst_andamento_pedidoInput
    connect?: est_andamentoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type pedidoUpdateOneRequiredWithoutEst_andamento_pedidoNestedInput = {
    create?: XOR<pedidoCreateWithoutEst_andamento_pedidoInput, pedidoUncheckedCreateWithoutEst_andamento_pedidoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutEst_andamento_pedidoInput
    upsert?: pedidoUpsertWithoutEst_andamento_pedidoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutEst_andamento_pedidoInput, pedidoUpdateWithoutEst_andamento_pedidoInput>, pedidoUncheckedUpdateWithoutEst_andamento_pedidoInput>
  }

  export type est_andamentoUpdateOneRequiredWithoutEst_andamento_pedidoNestedInput = {
    create?: XOR<est_andamentoCreateWithoutEst_andamento_pedidoInput, est_andamentoUncheckedCreateWithoutEst_andamento_pedidoInput>
    connectOrCreate?: est_andamentoCreateOrConnectWithoutEst_andamento_pedidoInput
    upsert?: est_andamentoUpsertWithoutEst_andamento_pedidoInput
    connect?: est_andamentoWhereUniqueInput
    update?: XOR<XOR<est_andamentoUpdateToOneWithWhereWithoutEst_andamento_pedidoInput, est_andamentoUpdateWithoutEst_andamento_pedidoInput>, est_andamentoUncheckedUpdateWithoutEst_andamento_pedidoInput>
  }

  export type pedidoCreateNestedOneWithoutInfo_cancelamentoInput = {
    create?: XOR<pedidoCreateWithoutInfo_cancelamentoInput, pedidoUncheckedCreateWithoutInfo_cancelamentoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutInfo_cancelamentoInput
    connect?: pedidoWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutInfo_cancelamentoNestedInput = {
    create?: XOR<pedidoCreateWithoutInfo_cancelamentoInput, pedidoUncheckedCreateWithoutInfo_cancelamentoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutInfo_cancelamentoInput
    upsert?: pedidoUpsertWithoutInfo_cancelamentoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutInfo_cancelamentoInput, pedidoUpdateWithoutInfo_cancelamentoInput>, pedidoUncheckedUpdateWithoutInfo_cancelamentoInput>
  }

  export type pedidoCreateNestedOneWithoutInfo_pagamentoInput = {
    create?: XOR<pedidoCreateWithoutInfo_pagamentoInput, pedidoUncheckedCreateWithoutInfo_pagamentoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutInfo_pagamentoInput
    connect?: pedidoWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutInfo_pagamentoNestedInput = {
    create?: XOR<pedidoCreateWithoutInfo_pagamentoInput, pedidoUncheckedCreateWithoutInfo_pagamentoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutInfo_pagamentoInput
    upsert?: pedidoUpsertWithoutInfo_pagamentoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutInfo_pagamentoInput, pedidoUpdateWithoutInfo_pagamentoInput>, pedidoUncheckedUpdateWithoutInfo_pagamentoInput>
  }

  export type pedidoCreateNestedOneWithoutInfo_pfInput = {
    create?: XOR<pedidoCreateWithoutInfo_pfInput, pedidoUncheckedCreateWithoutInfo_pfInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutInfo_pfInput
    connect?: pedidoWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutInfo_pfNestedInput = {
    create?: XOR<pedidoCreateWithoutInfo_pfInput, pedidoUncheckedCreateWithoutInfo_pfInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutInfo_pfInput
    upsert?: pedidoUpsertWithoutInfo_pfInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutInfo_pfInput, pedidoUpdateWithoutInfo_pfInput>, pedidoUncheckedUpdateWithoutInfo_pfInput>
  }

  export type pedidoCreateNestedOneWithoutInfo_pjInput = {
    create?: XOR<pedidoCreateWithoutInfo_pjInput, pedidoUncheckedCreateWithoutInfo_pjInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutInfo_pjInput
    connect?: pedidoWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutInfo_pjNestedInput = {
    create?: XOR<pedidoCreateWithoutInfo_pjInput, pedidoUncheckedCreateWithoutInfo_pjInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutInfo_pjInput
    upsert?: pedidoUpsertWithoutInfo_pjInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutInfo_pjInput, pedidoUpdateWithoutInfo_pjInput>, pedidoUncheckedUpdateWithoutInfo_pjInput>
  }

  export type pedidoCreateNestedOneWithoutIntercorrenciaInput = {
    create?: XOR<pedidoCreateWithoutIntercorrenciaInput, pedidoUncheckedCreateWithoutIntercorrenciaInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutIntercorrenciaInput
    connect?: pedidoWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutIntercorrenciaInput = {
    create?: XOR<usuarioCreateWithoutIntercorrenciaInput, usuarioUncheckedCreateWithoutIntercorrenciaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutIntercorrenciaInput
    connect?: usuarioWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutIntercorrenciaNestedInput = {
    create?: XOR<pedidoCreateWithoutIntercorrenciaInput, pedidoUncheckedCreateWithoutIntercorrenciaInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutIntercorrenciaInput
    upsert?: pedidoUpsertWithoutIntercorrenciaInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutIntercorrenciaInput, pedidoUpdateWithoutIntercorrenciaInput>, pedidoUncheckedUpdateWithoutIntercorrenciaInput>
  }

  export type usuarioUpdateOneRequiredWithoutIntercorrenciaNestedInput = {
    create?: XOR<usuarioCreateWithoutIntercorrenciaInput, usuarioUncheckedCreateWithoutIntercorrenciaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutIntercorrenciaInput
    upsert?: usuarioUpsertWithoutIntercorrenciaInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutIntercorrenciaInput, usuarioUpdateWithoutIntercorrenciaInput>, usuarioUncheckedUpdateWithoutIntercorrenciaInput>
  }

  export type destinatarioCreateNestedOneWithoutPedidoInput = {
    create?: XOR<destinatarioCreateWithoutPedidoInput, destinatarioUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: destinatarioCreateOrConnectWithoutPedidoInput
    connect?: destinatarioWhereUniqueInput
  }

  export type destinoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<destinoCreateWithoutPedidoInput, destinoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: destinoCreateOrConnectWithoutPedidoInput
    connect?: destinoWhereUniqueInput
  }

  export type est_andamento_pedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<est_andamento_pedidoCreateWithoutPedidoInput, est_andamento_pedidoUncheckedCreateWithoutPedidoInput> | est_andamento_pedidoCreateWithoutPedidoInput[] | est_andamento_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: est_andamento_pedidoCreateOrConnectWithoutPedidoInput | est_andamento_pedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: est_andamento_pedidoCreateManyPedidoInputEnvelope
    connect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
  }

  export type info_cancelamentoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<info_cancelamentoCreateWithoutPedidoInput, info_cancelamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_cancelamentoCreateOrConnectWithoutPedidoInput
    connect?: info_cancelamentoWhereUniqueInput
  }

  export type info_pagamentoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<info_pagamentoCreateWithoutPedidoInput, info_pagamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pagamentoCreateOrConnectWithoutPedidoInput
    connect?: info_pagamentoWhereUniqueInput
  }

  export type info_pfCreateNestedOneWithoutPedidoInput = {
    create?: XOR<info_pfCreateWithoutPedidoInput, info_pfUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pfCreateOrConnectWithoutPedidoInput
    connect?: info_pfWhereUniqueInput
  }

  export type info_pjCreateNestedOneWithoutPedidoInput = {
    create?: XOR<info_pjCreateWithoutPedidoInput, info_pjUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pjCreateOrConnectWithoutPedidoInput
    connect?: info_pjWhereUniqueInput
  }

  export type intercorrenciaCreateNestedManyWithoutPedidoInput = {
    create?: XOR<intercorrenciaCreateWithoutPedidoInput, intercorrenciaUncheckedCreateWithoutPedidoInput> | intercorrenciaCreateWithoutPedidoInput[] | intercorrenciaUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: intercorrenciaCreateOrConnectWithoutPedidoInput | intercorrenciaCreateOrConnectWithoutPedidoInput[]
    createMany?: intercorrenciaCreateManyPedidoInputEnvelope
    connect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
  }

  export type clienteCreateNestedOneWithoutPedidoInput = {
    create?: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: clienteCreateOrConnectWithoutPedidoInput
    connect?: clienteWhereUniqueInput
  }

  export type produto_pedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<produto_pedidoCreateWithoutPedidoInput, produto_pedidoUncheckedCreateWithoutPedidoInput> | produto_pedidoCreateWithoutPedidoInput[] | produto_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: produto_pedidoCreateOrConnectWithoutPedidoInput | produto_pedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: produto_pedidoCreateManyPedidoInputEnvelope
    connect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
  }

  export type destinatarioUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<destinatarioCreateWithoutPedidoInput, destinatarioUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: destinatarioCreateOrConnectWithoutPedidoInput
    connect?: destinatarioWhereUniqueInput
  }

  export type destinoUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<destinoCreateWithoutPedidoInput, destinoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: destinoCreateOrConnectWithoutPedidoInput
    connect?: destinoWhereUniqueInput
  }

  export type est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<est_andamento_pedidoCreateWithoutPedidoInput, est_andamento_pedidoUncheckedCreateWithoutPedidoInput> | est_andamento_pedidoCreateWithoutPedidoInput[] | est_andamento_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: est_andamento_pedidoCreateOrConnectWithoutPedidoInput | est_andamento_pedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: est_andamento_pedidoCreateManyPedidoInputEnvelope
    connect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
  }

  export type info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<info_cancelamentoCreateWithoutPedidoInput, info_cancelamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_cancelamentoCreateOrConnectWithoutPedidoInput
    connect?: info_cancelamentoWhereUniqueInput
  }

  export type info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<info_pagamentoCreateWithoutPedidoInput, info_pagamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pagamentoCreateOrConnectWithoutPedidoInput
    connect?: info_pagamentoWhereUniqueInput
  }

  export type info_pfUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<info_pfCreateWithoutPedidoInput, info_pfUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pfCreateOrConnectWithoutPedidoInput
    connect?: info_pfWhereUniqueInput
  }

  export type info_pjUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<info_pjCreateWithoutPedidoInput, info_pjUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pjCreateOrConnectWithoutPedidoInput
    connect?: info_pjWhereUniqueInput
  }

  export type intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<intercorrenciaCreateWithoutPedidoInput, intercorrenciaUncheckedCreateWithoutPedidoInput> | intercorrenciaCreateWithoutPedidoInput[] | intercorrenciaUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: intercorrenciaCreateOrConnectWithoutPedidoInput | intercorrenciaCreateOrConnectWithoutPedidoInput[]
    createMany?: intercorrenciaCreateManyPedidoInputEnvelope
    connect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
  }

  export type produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<produto_pedidoCreateWithoutPedidoInput, produto_pedidoUncheckedCreateWithoutPedidoInput> | produto_pedidoCreateWithoutPedidoInput[] | produto_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: produto_pedidoCreateOrConnectWithoutPedidoInput | produto_pedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: produto_pedidoCreateManyPedidoInputEnvelope
    connect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
  }

  export type Enumpedido_tipo_entregaFieldUpdateOperationsInput = {
    set?: $Enums.pedido_tipo_entrega
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type destinatarioUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<destinatarioCreateWithoutPedidoInput, destinatarioUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: destinatarioCreateOrConnectWithoutPedidoInput
    upsert?: destinatarioUpsertWithoutPedidoInput
    disconnect?: destinatarioWhereInput | boolean
    delete?: destinatarioWhereInput | boolean
    connect?: destinatarioWhereUniqueInput
    update?: XOR<XOR<destinatarioUpdateToOneWithWhereWithoutPedidoInput, destinatarioUpdateWithoutPedidoInput>, destinatarioUncheckedUpdateWithoutPedidoInput>
  }

  export type destinoUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<destinoCreateWithoutPedidoInput, destinoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: destinoCreateOrConnectWithoutPedidoInput
    upsert?: destinoUpsertWithoutPedidoInput
    disconnect?: destinoWhereInput | boolean
    delete?: destinoWhereInput | boolean
    connect?: destinoWhereUniqueInput
    update?: XOR<XOR<destinoUpdateToOneWithWhereWithoutPedidoInput, destinoUpdateWithoutPedidoInput>, destinoUncheckedUpdateWithoutPedidoInput>
  }

  export type est_andamento_pedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<est_andamento_pedidoCreateWithoutPedidoInput, est_andamento_pedidoUncheckedCreateWithoutPedidoInput> | est_andamento_pedidoCreateWithoutPedidoInput[] | est_andamento_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: est_andamento_pedidoCreateOrConnectWithoutPedidoInput | est_andamento_pedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: est_andamento_pedidoUpsertWithWhereUniqueWithoutPedidoInput | est_andamento_pedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: est_andamento_pedidoCreateManyPedidoInputEnvelope
    set?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    disconnect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    delete?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    connect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    update?: est_andamento_pedidoUpdateWithWhereUniqueWithoutPedidoInput | est_andamento_pedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: est_andamento_pedidoUpdateManyWithWhereWithoutPedidoInput | est_andamento_pedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: est_andamento_pedidoScalarWhereInput | est_andamento_pedidoScalarWhereInput[]
  }

  export type info_cancelamentoUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<info_cancelamentoCreateWithoutPedidoInput, info_cancelamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_cancelamentoCreateOrConnectWithoutPedidoInput
    upsert?: info_cancelamentoUpsertWithoutPedidoInput
    disconnect?: info_cancelamentoWhereInput | boolean
    delete?: info_cancelamentoWhereInput | boolean
    connect?: info_cancelamentoWhereUniqueInput
    update?: XOR<XOR<info_cancelamentoUpdateToOneWithWhereWithoutPedidoInput, info_cancelamentoUpdateWithoutPedidoInput>, info_cancelamentoUncheckedUpdateWithoutPedidoInput>
  }

  export type info_pagamentoUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<info_pagamentoCreateWithoutPedidoInput, info_pagamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pagamentoCreateOrConnectWithoutPedidoInput
    upsert?: info_pagamentoUpsertWithoutPedidoInput
    disconnect?: info_pagamentoWhereInput | boolean
    delete?: info_pagamentoWhereInput | boolean
    connect?: info_pagamentoWhereUniqueInput
    update?: XOR<XOR<info_pagamentoUpdateToOneWithWhereWithoutPedidoInput, info_pagamentoUpdateWithoutPedidoInput>, info_pagamentoUncheckedUpdateWithoutPedidoInput>
  }

  export type info_pfUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<info_pfCreateWithoutPedidoInput, info_pfUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pfCreateOrConnectWithoutPedidoInput
    upsert?: info_pfUpsertWithoutPedidoInput
    disconnect?: info_pfWhereInput | boolean
    delete?: info_pfWhereInput | boolean
    connect?: info_pfWhereUniqueInput
    update?: XOR<XOR<info_pfUpdateToOneWithWhereWithoutPedidoInput, info_pfUpdateWithoutPedidoInput>, info_pfUncheckedUpdateWithoutPedidoInput>
  }

  export type info_pjUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<info_pjCreateWithoutPedidoInput, info_pjUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pjCreateOrConnectWithoutPedidoInput
    upsert?: info_pjUpsertWithoutPedidoInput
    disconnect?: info_pjWhereInput | boolean
    delete?: info_pjWhereInput | boolean
    connect?: info_pjWhereUniqueInput
    update?: XOR<XOR<info_pjUpdateToOneWithWhereWithoutPedidoInput, info_pjUpdateWithoutPedidoInput>, info_pjUncheckedUpdateWithoutPedidoInput>
  }

  export type intercorrenciaUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<intercorrenciaCreateWithoutPedidoInput, intercorrenciaUncheckedCreateWithoutPedidoInput> | intercorrenciaCreateWithoutPedidoInput[] | intercorrenciaUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: intercorrenciaCreateOrConnectWithoutPedidoInput | intercorrenciaCreateOrConnectWithoutPedidoInput[]
    upsert?: intercorrenciaUpsertWithWhereUniqueWithoutPedidoInput | intercorrenciaUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: intercorrenciaCreateManyPedidoInputEnvelope
    set?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    disconnect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    delete?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    connect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    update?: intercorrenciaUpdateWithWhereUniqueWithoutPedidoInput | intercorrenciaUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: intercorrenciaUpdateManyWithWhereWithoutPedidoInput | intercorrenciaUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: intercorrenciaScalarWhereInput | intercorrenciaScalarWhereInput[]
  }

  export type clienteUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: clienteCreateOrConnectWithoutPedidoInput
    upsert?: clienteUpsertWithoutPedidoInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutPedidoInput, clienteUpdateWithoutPedidoInput>, clienteUncheckedUpdateWithoutPedidoInput>
  }

  export type produto_pedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<produto_pedidoCreateWithoutPedidoInput, produto_pedidoUncheckedCreateWithoutPedidoInput> | produto_pedidoCreateWithoutPedidoInput[] | produto_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: produto_pedidoCreateOrConnectWithoutPedidoInput | produto_pedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: produto_pedidoUpsertWithWhereUniqueWithoutPedidoInput | produto_pedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: produto_pedidoCreateManyPedidoInputEnvelope
    set?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    disconnect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    delete?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    connect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    update?: produto_pedidoUpdateWithWhereUniqueWithoutPedidoInput | produto_pedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: produto_pedidoUpdateManyWithWhereWithoutPedidoInput | produto_pedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: produto_pedidoScalarWhereInput | produto_pedidoScalarWhereInput[]
  }

  export type destinatarioUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<destinatarioCreateWithoutPedidoInput, destinatarioUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: destinatarioCreateOrConnectWithoutPedidoInput
    upsert?: destinatarioUpsertWithoutPedidoInput
    disconnect?: destinatarioWhereInput | boolean
    delete?: destinatarioWhereInput | boolean
    connect?: destinatarioWhereUniqueInput
    update?: XOR<XOR<destinatarioUpdateToOneWithWhereWithoutPedidoInput, destinatarioUpdateWithoutPedidoInput>, destinatarioUncheckedUpdateWithoutPedidoInput>
  }

  export type destinoUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<destinoCreateWithoutPedidoInput, destinoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: destinoCreateOrConnectWithoutPedidoInput
    upsert?: destinoUpsertWithoutPedidoInput
    disconnect?: destinoWhereInput | boolean
    delete?: destinoWhereInput | boolean
    connect?: destinoWhereUniqueInput
    update?: XOR<XOR<destinoUpdateToOneWithWhereWithoutPedidoInput, destinoUpdateWithoutPedidoInput>, destinoUncheckedUpdateWithoutPedidoInput>
  }

  export type est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<est_andamento_pedidoCreateWithoutPedidoInput, est_andamento_pedidoUncheckedCreateWithoutPedidoInput> | est_andamento_pedidoCreateWithoutPedidoInput[] | est_andamento_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: est_andamento_pedidoCreateOrConnectWithoutPedidoInput | est_andamento_pedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: est_andamento_pedidoUpsertWithWhereUniqueWithoutPedidoInput | est_andamento_pedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: est_andamento_pedidoCreateManyPedidoInputEnvelope
    set?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    disconnect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    delete?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    connect?: est_andamento_pedidoWhereUniqueInput | est_andamento_pedidoWhereUniqueInput[]
    update?: est_andamento_pedidoUpdateWithWhereUniqueWithoutPedidoInput | est_andamento_pedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: est_andamento_pedidoUpdateManyWithWhereWithoutPedidoInput | est_andamento_pedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: est_andamento_pedidoScalarWhereInput | est_andamento_pedidoScalarWhereInput[]
  }

  export type info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<info_cancelamentoCreateWithoutPedidoInput, info_cancelamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_cancelamentoCreateOrConnectWithoutPedidoInput
    upsert?: info_cancelamentoUpsertWithoutPedidoInput
    disconnect?: info_cancelamentoWhereInput | boolean
    delete?: info_cancelamentoWhereInput | boolean
    connect?: info_cancelamentoWhereUniqueInput
    update?: XOR<XOR<info_cancelamentoUpdateToOneWithWhereWithoutPedidoInput, info_cancelamentoUpdateWithoutPedidoInput>, info_cancelamentoUncheckedUpdateWithoutPedidoInput>
  }

  export type info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<info_pagamentoCreateWithoutPedidoInput, info_pagamentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pagamentoCreateOrConnectWithoutPedidoInput
    upsert?: info_pagamentoUpsertWithoutPedidoInput
    disconnect?: info_pagamentoWhereInput | boolean
    delete?: info_pagamentoWhereInput | boolean
    connect?: info_pagamentoWhereUniqueInput
    update?: XOR<XOR<info_pagamentoUpdateToOneWithWhereWithoutPedidoInput, info_pagamentoUpdateWithoutPedidoInput>, info_pagamentoUncheckedUpdateWithoutPedidoInput>
  }

  export type info_pfUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<info_pfCreateWithoutPedidoInput, info_pfUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pfCreateOrConnectWithoutPedidoInput
    upsert?: info_pfUpsertWithoutPedidoInput
    disconnect?: info_pfWhereInput | boolean
    delete?: info_pfWhereInput | boolean
    connect?: info_pfWhereUniqueInput
    update?: XOR<XOR<info_pfUpdateToOneWithWhereWithoutPedidoInput, info_pfUpdateWithoutPedidoInput>, info_pfUncheckedUpdateWithoutPedidoInput>
  }

  export type info_pjUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<info_pjCreateWithoutPedidoInput, info_pjUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: info_pjCreateOrConnectWithoutPedidoInput
    upsert?: info_pjUpsertWithoutPedidoInput
    disconnect?: info_pjWhereInput | boolean
    delete?: info_pjWhereInput | boolean
    connect?: info_pjWhereUniqueInput
    update?: XOR<XOR<info_pjUpdateToOneWithWhereWithoutPedidoInput, info_pjUpdateWithoutPedidoInput>, info_pjUncheckedUpdateWithoutPedidoInput>
  }

  export type intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<intercorrenciaCreateWithoutPedidoInput, intercorrenciaUncheckedCreateWithoutPedidoInput> | intercorrenciaCreateWithoutPedidoInput[] | intercorrenciaUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: intercorrenciaCreateOrConnectWithoutPedidoInput | intercorrenciaCreateOrConnectWithoutPedidoInput[]
    upsert?: intercorrenciaUpsertWithWhereUniqueWithoutPedidoInput | intercorrenciaUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: intercorrenciaCreateManyPedidoInputEnvelope
    set?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    disconnect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    delete?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    connect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    update?: intercorrenciaUpdateWithWhereUniqueWithoutPedidoInput | intercorrenciaUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: intercorrenciaUpdateManyWithWhereWithoutPedidoInput | intercorrenciaUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: intercorrenciaScalarWhereInput | intercorrenciaScalarWhereInput[]
  }

  export type produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<produto_pedidoCreateWithoutPedidoInput, produto_pedidoUncheckedCreateWithoutPedidoInput> | produto_pedidoCreateWithoutPedidoInput[] | produto_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: produto_pedidoCreateOrConnectWithoutPedidoInput | produto_pedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: produto_pedidoUpsertWithWhereUniqueWithoutPedidoInput | produto_pedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: produto_pedidoCreateManyPedidoInputEnvelope
    set?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    disconnect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    delete?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    connect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    update?: produto_pedidoUpdateWithWhereUniqueWithoutPedidoInput | produto_pedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: produto_pedidoUpdateManyWithWhereWithoutPedidoInput | produto_pedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: produto_pedidoScalarWhereInput | produto_pedidoScalarWhereInput[]
  }

  export type categoriaCreateNestedOneWithoutProdutoInput = {
    create?: XOR<categoriaCreateWithoutProdutoInput, categoriaUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutProdutoInput
    connect?: categoriaWhereUniqueInput
  }

  export type unidadeCreateNestedOneWithoutProdutoInput = {
    create?: XOR<unidadeCreateWithoutProdutoInput, unidadeUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: unidadeCreateOrConnectWithoutProdutoInput
    connect?: unidadeWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutProdutoInput = {
    create?: XOR<usuarioCreateWithoutProdutoInput, usuarioUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProdutoInput
    connect?: usuarioWhereUniqueInput
  }

  export type produto_pedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<produto_pedidoCreateWithoutProdutoInput, produto_pedidoUncheckedCreateWithoutProdutoInput> | produto_pedidoCreateWithoutProdutoInput[] | produto_pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: produto_pedidoCreateOrConnectWithoutProdutoInput | produto_pedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: produto_pedidoCreateManyProdutoInputEnvelope
    connect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
  }

  export type produto_pedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<produto_pedidoCreateWithoutProdutoInput, produto_pedidoUncheckedCreateWithoutProdutoInput> | produto_pedidoCreateWithoutProdutoInput[] | produto_pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: produto_pedidoCreateOrConnectWithoutProdutoInput | produto_pedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: produto_pedidoCreateManyProdutoInputEnvelope
    connect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type categoriaUpdateOneRequiredWithoutProdutoNestedInput = {
    create?: XOR<categoriaCreateWithoutProdutoInput, categoriaUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutProdutoInput
    upsert?: categoriaUpsertWithoutProdutoInput
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutProdutoInput, categoriaUpdateWithoutProdutoInput>, categoriaUncheckedUpdateWithoutProdutoInput>
  }

  export type unidadeUpdateOneRequiredWithoutProdutoNestedInput = {
    create?: XOR<unidadeCreateWithoutProdutoInput, unidadeUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: unidadeCreateOrConnectWithoutProdutoInput
    upsert?: unidadeUpsertWithoutProdutoInput
    connect?: unidadeWhereUniqueInput
    update?: XOR<XOR<unidadeUpdateToOneWithWhereWithoutProdutoInput, unidadeUpdateWithoutProdutoInput>, unidadeUncheckedUpdateWithoutProdutoInput>
  }

  export type usuarioUpdateOneWithoutProdutoNestedInput = {
    create?: XOR<usuarioCreateWithoutProdutoInput, usuarioUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProdutoInput
    upsert?: usuarioUpsertWithoutProdutoInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutProdutoInput, usuarioUpdateWithoutProdutoInput>, usuarioUncheckedUpdateWithoutProdutoInput>
  }

  export type produto_pedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<produto_pedidoCreateWithoutProdutoInput, produto_pedidoUncheckedCreateWithoutProdutoInput> | produto_pedidoCreateWithoutProdutoInput[] | produto_pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: produto_pedidoCreateOrConnectWithoutProdutoInput | produto_pedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: produto_pedidoUpsertWithWhereUniqueWithoutProdutoInput | produto_pedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: produto_pedidoCreateManyProdutoInputEnvelope
    set?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    disconnect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    delete?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    connect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    update?: produto_pedidoUpdateWithWhereUniqueWithoutProdutoInput | produto_pedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: produto_pedidoUpdateManyWithWhereWithoutProdutoInput | produto_pedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: produto_pedidoScalarWhereInput | produto_pedidoScalarWhereInput[]
  }

  export type produto_pedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<produto_pedidoCreateWithoutProdutoInput, produto_pedidoUncheckedCreateWithoutProdutoInput> | produto_pedidoCreateWithoutProdutoInput[] | produto_pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: produto_pedidoCreateOrConnectWithoutProdutoInput | produto_pedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: produto_pedidoUpsertWithWhereUniqueWithoutProdutoInput | produto_pedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: produto_pedidoCreateManyProdutoInputEnvelope
    set?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    disconnect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    delete?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    connect?: produto_pedidoWhereUniqueInput | produto_pedidoWhereUniqueInput[]
    update?: produto_pedidoUpdateWithWhereUniqueWithoutProdutoInput | produto_pedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: produto_pedidoUpdateManyWithWhereWithoutProdutoInput | produto_pedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: produto_pedidoScalarWhereInput | produto_pedidoScalarWhereInput[]
  }

  export type pedidoCreateNestedOneWithoutProduto_pedidoInput = {
    create?: XOR<pedidoCreateWithoutProduto_pedidoInput, pedidoUncheckedCreateWithoutProduto_pedidoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutProduto_pedidoInput
    connect?: pedidoWhereUniqueInput
  }

  export type produtoCreateNestedOneWithoutProduto_pedidoInput = {
    create?: XOR<produtoCreateWithoutProduto_pedidoInput, produtoUncheckedCreateWithoutProduto_pedidoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutProduto_pedidoInput
    connect?: produtoWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutProduto_pedidoNestedInput = {
    create?: XOR<pedidoCreateWithoutProduto_pedidoInput, pedidoUncheckedCreateWithoutProduto_pedidoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutProduto_pedidoInput
    upsert?: pedidoUpsertWithoutProduto_pedidoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutProduto_pedidoInput, pedidoUpdateWithoutProduto_pedidoInput>, pedidoUncheckedUpdateWithoutProduto_pedidoInput>
  }

  export type produtoUpdateOneRequiredWithoutProduto_pedidoNestedInput = {
    create?: XOR<produtoCreateWithoutProduto_pedidoInput, produtoUncheckedCreateWithoutProduto_pedidoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutProduto_pedidoInput
    upsert?: produtoUpsertWithoutProduto_pedidoInput
    connect?: produtoWhereUniqueInput
    update?: XOR<XOR<produtoUpdateToOneWithWhereWithoutProduto_pedidoInput, produtoUpdateWithoutProduto_pedidoInput>, produtoUncheckedUpdateWithoutProduto_pedidoInput>
  }

  export type produtoCreateNestedManyWithoutUnidadeInput = {
    create?: XOR<produtoCreateWithoutUnidadeInput, produtoUncheckedCreateWithoutUnidadeInput> | produtoCreateWithoutUnidadeInput[] | produtoUncheckedCreateWithoutUnidadeInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUnidadeInput | produtoCreateOrConnectWithoutUnidadeInput[]
    createMany?: produtoCreateManyUnidadeInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type produtoUncheckedCreateNestedManyWithoutUnidadeInput = {
    create?: XOR<produtoCreateWithoutUnidadeInput, produtoUncheckedCreateWithoutUnidadeInput> | produtoCreateWithoutUnidadeInput[] | produtoUncheckedCreateWithoutUnidadeInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUnidadeInput | produtoCreateOrConnectWithoutUnidadeInput[]
    createMany?: produtoCreateManyUnidadeInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type produtoUpdateManyWithoutUnidadeNestedInput = {
    create?: XOR<produtoCreateWithoutUnidadeInput, produtoUncheckedCreateWithoutUnidadeInput> | produtoCreateWithoutUnidadeInput[] | produtoUncheckedCreateWithoutUnidadeInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUnidadeInput | produtoCreateOrConnectWithoutUnidadeInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutUnidadeInput | produtoUpsertWithWhereUniqueWithoutUnidadeInput[]
    createMany?: produtoCreateManyUnidadeInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutUnidadeInput | produtoUpdateWithWhereUniqueWithoutUnidadeInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutUnidadeInput | produtoUpdateManyWithWhereWithoutUnidadeInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type produtoUncheckedUpdateManyWithoutUnidadeNestedInput = {
    create?: XOR<produtoCreateWithoutUnidadeInput, produtoUncheckedCreateWithoutUnidadeInput> | produtoCreateWithoutUnidadeInput[] | produtoUncheckedCreateWithoutUnidadeInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUnidadeInput | produtoCreateOrConnectWithoutUnidadeInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutUnidadeInput | produtoUpsertWithWhereUniqueWithoutUnidadeInput[]
    createMany?: produtoCreateManyUnidadeInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutUnidadeInput | produtoUpdateWithWhereUniqueWithoutUnidadeInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutUnidadeInput | produtoUpdateManyWithWhereWithoutUnidadeInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type clienteCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<clienteCreateWithoutUsuarioInput, clienteUncheckedCreateWithoutUsuarioInput> | clienteCreateWithoutUsuarioInput[] | clienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: clienteCreateOrConnectWithoutUsuarioInput | clienteCreateOrConnectWithoutUsuarioInput[]
    createMany?: clienteCreateManyUsuarioInputEnvelope
    connect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
  }

  export type intercorrenciaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<intercorrenciaCreateWithoutUsuarioInput, intercorrenciaUncheckedCreateWithoutUsuarioInput> | intercorrenciaCreateWithoutUsuarioInput[] | intercorrenciaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: intercorrenciaCreateOrConnectWithoutUsuarioInput | intercorrenciaCreateOrConnectWithoutUsuarioInput[]
    createMany?: intercorrenciaCreateManyUsuarioInputEnvelope
    connect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
  }

  export type produtoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<produtoCreateWithoutUsuarioInput, produtoUncheckedCreateWithoutUsuarioInput> | produtoCreateWithoutUsuarioInput[] | produtoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUsuarioInput | produtoCreateOrConnectWithoutUsuarioInput[]
    createMany?: produtoCreateManyUsuarioInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type clienteUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<clienteCreateWithoutUsuarioInput, clienteUncheckedCreateWithoutUsuarioInput> | clienteCreateWithoutUsuarioInput[] | clienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: clienteCreateOrConnectWithoutUsuarioInput | clienteCreateOrConnectWithoutUsuarioInput[]
    createMany?: clienteCreateManyUsuarioInputEnvelope
    connect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
  }

  export type intercorrenciaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<intercorrenciaCreateWithoutUsuarioInput, intercorrenciaUncheckedCreateWithoutUsuarioInput> | intercorrenciaCreateWithoutUsuarioInput[] | intercorrenciaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: intercorrenciaCreateOrConnectWithoutUsuarioInput | intercorrenciaCreateOrConnectWithoutUsuarioInput[]
    createMany?: intercorrenciaCreateManyUsuarioInputEnvelope
    connect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
  }

  export type produtoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<produtoCreateWithoutUsuarioInput, produtoUncheckedCreateWithoutUsuarioInput> | produtoCreateWithoutUsuarioInput[] | produtoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUsuarioInput | produtoCreateOrConnectWithoutUsuarioInput[]
    createMany?: produtoCreateManyUsuarioInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type Enumusuario_tipoFieldUpdateOperationsInput = {
    set?: $Enums.usuario_tipo
  }

  export type clienteUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<clienteCreateWithoutUsuarioInput, clienteUncheckedCreateWithoutUsuarioInput> | clienteCreateWithoutUsuarioInput[] | clienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: clienteCreateOrConnectWithoutUsuarioInput | clienteCreateOrConnectWithoutUsuarioInput[]
    upsert?: clienteUpsertWithWhereUniqueWithoutUsuarioInput | clienteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: clienteCreateManyUsuarioInputEnvelope
    set?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    disconnect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    delete?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    connect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    update?: clienteUpdateWithWhereUniqueWithoutUsuarioInput | clienteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: clienteUpdateManyWithWhereWithoutUsuarioInput | clienteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: clienteScalarWhereInput | clienteScalarWhereInput[]
  }

  export type intercorrenciaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<intercorrenciaCreateWithoutUsuarioInput, intercorrenciaUncheckedCreateWithoutUsuarioInput> | intercorrenciaCreateWithoutUsuarioInput[] | intercorrenciaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: intercorrenciaCreateOrConnectWithoutUsuarioInput | intercorrenciaCreateOrConnectWithoutUsuarioInput[]
    upsert?: intercorrenciaUpsertWithWhereUniqueWithoutUsuarioInput | intercorrenciaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: intercorrenciaCreateManyUsuarioInputEnvelope
    set?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    disconnect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    delete?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    connect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    update?: intercorrenciaUpdateWithWhereUniqueWithoutUsuarioInput | intercorrenciaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: intercorrenciaUpdateManyWithWhereWithoutUsuarioInput | intercorrenciaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: intercorrenciaScalarWhereInput | intercorrenciaScalarWhereInput[]
  }

  export type produtoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<produtoCreateWithoutUsuarioInput, produtoUncheckedCreateWithoutUsuarioInput> | produtoCreateWithoutUsuarioInput[] | produtoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUsuarioInput | produtoCreateOrConnectWithoutUsuarioInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutUsuarioInput | produtoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: produtoCreateManyUsuarioInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutUsuarioInput | produtoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutUsuarioInput | produtoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type clienteUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<clienteCreateWithoutUsuarioInput, clienteUncheckedCreateWithoutUsuarioInput> | clienteCreateWithoutUsuarioInput[] | clienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: clienteCreateOrConnectWithoutUsuarioInput | clienteCreateOrConnectWithoutUsuarioInput[]
    upsert?: clienteUpsertWithWhereUniqueWithoutUsuarioInput | clienteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: clienteCreateManyUsuarioInputEnvelope
    set?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    disconnect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    delete?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    connect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    update?: clienteUpdateWithWhereUniqueWithoutUsuarioInput | clienteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: clienteUpdateManyWithWhereWithoutUsuarioInput | clienteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: clienteScalarWhereInput | clienteScalarWhereInput[]
  }

  export type intercorrenciaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<intercorrenciaCreateWithoutUsuarioInput, intercorrenciaUncheckedCreateWithoutUsuarioInput> | intercorrenciaCreateWithoutUsuarioInput[] | intercorrenciaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: intercorrenciaCreateOrConnectWithoutUsuarioInput | intercorrenciaCreateOrConnectWithoutUsuarioInput[]
    upsert?: intercorrenciaUpsertWithWhereUniqueWithoutUsuarioInput | intercorrenciaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: intercorrenciaCreateManyUsuarioInputEnvelope
    set?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    disconnect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    delete?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    connect?: intercorrenciaWhereUniqueInput | intercorrenciaWhereUniqueInput[]
    update?: intercorrenciaUpdateWithWhereUniqueWithoutUsuarioInput | intercorrenciaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: intercorrenciaUpdateManyWithWhereWithoutUsuarioInput | intercorrenciaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: intercorrenciaScalarWhereInput | intercorrenciaScalarWhereInput[]
  }

  export type produtoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<produtoCreateWithoutUsuarioInput, produtoUncheckedCreateWithoutUsuarioInput> | produtoCreateWithoutUsuarioInput[] | produtoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUsuarioInput | produtoCreateOrConnectWithoutUsuarioInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutUsuarioInput | produtoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: produtoCreateManyUsuarioInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutUsuarioInput | produtoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutUsuarioInput | produtoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumpedido_tipo_entregaFilter<$PrismaModel = never> = {
    equals?: $Enums.pedido_tipo_entrega | Enumpedido_tipo_entregaFieldRefInput<$PrismaModel>
    in?: $Enums.pedido_tipo_entrega[]
    notIn?: $Enums.pedido_tipo_entrega[]
    not?: NestedEnumpedido_tipo_entregaFilter<$PrismaModel> | $Enums.pedido_tipo_entrega
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumpedido_tipo_entregaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pedido_tipo_entrega | Enumpedido_tipo_entregaFieldRefInput<$PrismaModel>
    in?: $Enums.pedido_tipo_entrega[]
    notIn?: $Enums.pedido_tipo_entrega[]
    not?: NestedEnumpedido_tipo_entregaWithAggregatesFilter<$PrismaModel> | $Enums.pedido_tipo_entrega
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpedido_tipo_entregaFilter<$PrismaModel>
    _max?: NestedEnumpedido_tipo_entregaFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumusuario_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo | Enumusuario_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo[]
    notIn?: $Enums.usuario_tipo[]
    not?: NestedEnumusuario_tipoFilter<$PrismaModel> | $Enums.usuario_tipo
  }

  export type NestedEnumusuario_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo | Enumusuario_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo[]
    notIn?: $Enums.usuario_tipo[]
    not?: NestedEnumusuario_tipoWithAggregatesFilter<$PrismaModel> | $Enums.usuario_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuario_tipoFilter<$PrismaModel>
    _max?: NestedEnumusuario_tipoFilter<$PrismaModel>
  }

  export type produtoCreateWithoutCategoriaInput = {
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    dthr_alt?: Date | string | null
    estado?: boolean
    unidade: unidadeCreateNestedOneWithoutProdutoInput
    usuario?: usuarioCreateNestedOneWithoutProdutoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    id_unidade: number
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    estado?: boolean
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutCategoriaInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput>
  }

  export type produtoCreateManyCategoriaInputEnvelope = {
    data: produtoCreateManyCategoriaInput | produtoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type produtoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: produtoWhereUniqueInput
    update: XOR<produtoUpdateWithoutCategoriaInput, produtoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput>
  }

  export type produtoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: produtoWhereUniqueInput
    data: XOR<produtoUpdateWithoutCategoriaInput, produtoUncheckedUpdateWithoutCategoriaInput>
  }

  export type produtoUpdateManyWithWhereWithoutCategoriaInput = {
    where: produtoScalarWhereInput
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type produtoScalarWhereInput = {
    AND?: produtoScalarWhereInput | produtoScalarWhereInput[]
    OR?: produtoScalarWhereInput[]
    NOT?: produtoScalarWhereInput | produtoScalarWhereInput[]
    id?: IntFilter<"produto"> | number
    id_categoria?: IntFilter<"produto"> | number
    id_unidade?: IntFilter<"produto"> | number
    nome?: StringFilter<"produto"> | string
    preco_venda?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: IntNullableFilter<"produto"> | number | null
    dthr_alt?: DateTimeNullableFilter<"produto"> | Date | string | null
    estado?: BoolFilter<"produto"> | boolean
  }

  export type usuarioCreateWithoutClienteInput = {
    nome: string
    login: string
    senha: string
    tipo: $Enums.usuario_tipo
    intercorrencia?: intercorrenciaCreateNestedManyWithoutUsuarioInput
    produto?: produtoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutClienteInput = {
    id?: number
    nome: string
    login: string
    senha: string
    tipo: $Enums.usuario_tipo
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutUsuarioInput
    produto?: produtoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutClienteInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutClienteInput, usuarioUncheckedCreateWithoutClienteInput>
  }

  export type pedidoCreateWithoutClienteInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioCreateNestedOneWithoutPedidoInput
    destino?: destinoCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutPedidoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutClienteInput = {
    id?: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedCreateNestedOneWithoutPedidoInput
    destino?: destinoUncheckedCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfUncheckedCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjUncheckedCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutClienteInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput>
  }

  export type pedidoCreateManyClienteInputEnvelope = {
    data: pedidoCreateManyClienteInput | pedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutClienteInput = {
    update: XOR<usuarioUpdateWithoutClienteInput, usuarioUncheckedUpdateWithoutClienteInput>
    create: XOR<usuarioCreateWithoutClienteInput, usuarioUncheckedCreateWithoutClienteInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutClienteInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutClienteInput, usuarioUncheckedUpdateWithoutClienteInput>
  }

  export type usuarioUpdateWithoutClienteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    intercorrencia?: intercorrenciaUpdateManyWithoutUsuarioNestedInput
    produto?: produtoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutUsuarioNestedInput
    produto?: produtoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type pedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutClienteInput, pedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutClienteInput, pedidoUncheckedUpdateWithoutClienteInput>
  }

  export type pedidoUpdateManyWithWhereWithoutClienteInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type pedidoScalarWhereInput = {
    AND?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    OR?: pedidoScalarWhereInput[]
    NOT?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    id?: IntFilter<"pedido"> | number
    id_cliente?: IntFilter<"pedido"> | number
    id_usuario_autor?: IntFilter<"pedido"> | number
    dthr_criacao?: DateTimeFilter<"pedido"> | Date | string
    id_usuario_alt?: IntNullableFilter<"pedido"> | number | null
    dthr_alt?: DateTimeNullableFilter<"pedido"> | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFilter<"pedido"> | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFilter<"pedido"> | Date | string
    preco_frete?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFilter<"pedido"> | number
    preco_final?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: DateTimeNullableFilter<"pedido"> | Date | string | null
    dt_pago?: DateTimeNullableFilter<"pedido"> | Date | string | null
    preco_custo_total?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
  }

  export type pedidoCreateWithoutDestinatarioInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destino?: destinoCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutPedidoInput
    cliente: clienteCreateNestedOneWithoutPedidoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutDestinatarioInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destino?: destinoUncheckedCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfUncheckedCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjUncheckedCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutDestinatarioInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutDestinatarioInput, pedidoUncheckedCreateWithoutDestinatarioInput>
  }

  export type pedidoUpsertWithoutDestinatarioInput = {
    update: XOR<pedidoUpdateWithoutDestinatarioInput, pedidoUncheckedUpdateWithoutDestinatarioInput>
    create: XOR<pedidoCreateWithoutDestinatarioInput, pedidoUncheckedCreateWithoutDestinatarioInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutDestinatarioInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutDestinatarioInput, pedidoUncheckedUpdateWithoutDestinatarioInput>
  }

  export type pedidoUpdateWithoutDestinatarioInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: destinoUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutDestinatarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: destinoUncheckedUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUncheckedUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUncheckedUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateWithoutDestinoInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutPedidoInput
    cliente: clienteCreateNestedOneWithoutPedidoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutDestinoInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfUncheckedCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjUncheckedCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutDestinoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutDestinoInput, pedidoUncheckedCreateWithoutDestinoInput>
  }

  export type pedidoUpsertWithoutDestinoInput = {
    update: XOR<pedidoUpdateWithoutDestinoInput, pedidoUncheckedUpdateWithoutDestinoInput>
    create: XOR<pedidoCreateWithoutDestinoInput, pedidoUncheckedCreateWithoutDestinoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutDestinoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutDestinoInput, pedidoUncheckedUpdateWithoutDestinoInput>
  }

  export type pedidoUpdateWithoutDestinoInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutDestinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUncheckedUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUncheckedUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type est_andamento_pedidoCreateWithoutEst_andamentoInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    pedido: pedidoCreateNestedOneWithoutEst_andamento_pedidoInput
  }

  export type est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput = {
    id_pedido: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
  }

  export type est_andamento_pedidoCreateOrConnectWithoutEst_andamentoInput = {
    where: est_andamento_pedidoWhereUniqueInput
    create: XOR<est_andamento_pedidoCreateWithoutEst_andamentoInput, est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput>
  }

  export type est_andamento_pedidoCreateManyEst_andamentoInputEnvelope = {
    data: est_andamento_pedidoCreateManyEst_andamentoInput | est_andamento_pedidoCreateManyEst_andamentoInput[]
    skipDuplicates?: boolean
  }

  export type est_andamento_pedidoUpsertWithWhereUniqueWithoutEst_andamentoInput = {
    where: est_andamento_pedidoWhereUniqueInput
    update: XOR<est_andamento_pedidoUpdateWithoutEst_andamentoInput, est_andamento_pedidoUncheckedUpdateWithoutEst_andamentoInput>
    create: XOR<est_andamento_pedidoCreateWithoutEst_andamentoInput, est_andamento_pedidoUncheckedCreateWithoutEst_andamentoInput>
  }

  export type est_andamento_pedidoUpdateWithWhereUniqueWithoutEst_andamentoInput = {
    where: est_andamento_pedidoWhereUniqueInput
    data: XOR<est_andamento_pedidoUpdateWithoutEst_andamentoInput, est_andamento_pedidoUncheckedUpdateWithoutEst_andamentoInput>
  }

  export type est_andamento_pedidoUpdateManyWithWhereWithoutEst_andamentoInput = {
    where: est_andamento_pedidoScalarWhereInput
    data: XOR<est_andamento_pedidoUpdateManyMutationInput, est_andamento_pedidoUncheckedUpdateManyWithoutEst_andamentoInput>
  }

  export type est_andamento_pedidoScalarWhereInput = {
    AND?: est_andamento_pedidoScalarWhereInput | est_andamento_pedidoScalarWhereInput[]
    OR?: est_andamento_pedidoScalarWhereInput[]
    NOT?: est_andamento_pedidoScalarWhereInput | est_andamento_pedidoScalarWhereInput[]
    id_est_andamento?: IntFilter<"est_andamento_pedido"> | number
    id_pedido?: IntFilter<"est_andamento_pedido"> | number
    id_usuario_autor?: IntFilter<"est_andamento_pedido"> | number
    dthr_criacao?: DateTimeFilter<"est_andamento_pedido"> | Date | string
  }

  export type pedidoCreateWithoutEst_andamento_pedidoInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioCreateNestedOneWithoutPedidoInput
    destino?: destinoCreateNestedOneWithoutPedidoInput
    info_cancelamento?: info_cancelamentoCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutPedidoInput
    cliente: clienteCreateNestedOneWithoutPedidoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutEst_andamento_pedidoInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedCreateNestedOneWithoutPedidoInput
    destino?: destinoUncheckedCreateNestedOneWithoutPedidoInput
    info_cancelamento?: info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfUncheckedCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjUncheckedCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutEst_andamento_pedidoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutEst_andamento_pedidoInput, pedidoUncheckedCreateWithoutEst_andamento_pedidoInput>
  }

  export type est_andamentoCreateWithoutEst_andamento_pedidoInput = {
    nome: string
  }

  export type est_andamentoUncheckedCreateWithoutEst_andamento_pedidoInput = {
    id?: number
    nome: string
  }

  export type est_andamentoCreateOrConnectWithoutEst_andamento_pedidoInput = {
    where: est_andamentoWhereUniqueInput
    create: XOR<est_andamentoCreateWithoutEst_andamento_pedidoInput, est_andamentoUncheckedCreateWithoutEst_andamento_pedidoInput>
  }

  export type pedidoUpsertWithoutEst_andamento_pedidoInput = {
    update: XOR<pedidoUpdateWithoutEst_andamento_pedidoInput, pedidoUncheckedUpdateWithoutEst_andamento_pedidoInput>
    create: XOR<pedidoCreateWithoutEst_andamento_pedidoInput, pedidoUncheckedCreateWithoutEst_andamento_pedidoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutEst_andamento_pedidoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutEst_andamento_pedidoInput, pedidoUncheckedUpdateWithoutEst_andamento_pedidoInput>
  }

  export type pedidoUpdateWithoutEst_andamento_pedidoInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUpdateOneWithoutPedidoNestedInput
    destino?: destinoUpdateOneWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutEst_andamento_pedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedUpdateOneWithoutPedidoNestedInput
    destino?: destinoUncheckedUpdateOneWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUncheckedUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUncheckedUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type est_andamentoUpsertWithoutEst_andamento_pedidoInput = {
    update: XOR<est_andamentoUpdateWithoutEst_andamento_pedidoInput, est_andamentoUncheckedUpdateWithoutEst_andamento_pedidoInput>
    create: XOR<est_andamentoCreateWithoutEst_andamento_pedidoInput, est_andamentoUncheckedCreateWithoutEst_andamento_pedidoInput>
    where?: est_andamentoWhereInput
  }

  export type est_andamentoUpdateToOneWithWhereWithoutEst_andamento_pedidoInput = {
    where?: est_andamentoWhereInput
    data: XOR<est_andamentoUpdateWithoutEst_andamento_pedidoInput, est_andamentoUncheckedUpdateWithoutEst_andamento_pedidoInput>
  }

  export type est_andamentoUpdateWithoutEst_andamento_pedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type est_andamentoUncheckedUpdateWithoutEst_andamento_pedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type pedidoCreateWithoutInfo_cancelamentoInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioCreateNestedOneWithoutPedidoInput
    destino?: destinoCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutPedidoInput
    info_pagamento?: info_pagamentoCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutPedidoInput
    cliente: clienteCreateNestedOneWithoutPedidoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutInfo_cancelamentoInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedCreateNestedOneWithoutPedidoInput
    destino?: destinoUncheckedCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    info_pagamento?: info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfUncheckedCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjUncheckedCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutInfo_cancelamentoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutInfo_cancelamentoInput, pedidoUncheckedCreateWithoutInfo_cancelamentoInput>
  }

  export type pedidoUpsertWithoutInfo_cancelamentoInput = {
    update: XOR<pedidoUpdateWithoutInfo_cancelamentoInput, pedidoUncheckedUpdateWithoutInfo_cancelamentoInput>
    create: XOR<pedidoCreateWithoutInfo_cancelamentoInput, pedidoUncheckedCreateWithoutInfo_cancelamentoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutInfo_cancelamentoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutInfo_cancelamentoInput, pedidoUncheckedUpdateWithoutInfo_cancelamentoInput>
  }

  export type pedidoUpdateWithoutInfo_cancelamentoInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUpdateOneWithoutPedidoNestedInput
    destino?: destinoUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutInfo_cancelamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedUpdateOneWithoutPedidoNestedInput
    destino?: destinoUncheckedUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUncheckedUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUncheckedUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateWithoutInfo_pagamentoInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioCreateNestedOneWithoutPedidoInput
    destino?: destinoCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutPedidoInput
    cliente: clienteCreateNestedOneWithoutPedidoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutInfo_pagamentoInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedCreateNestedOneWithoutPedidoInput
    destino?: destinoUncheckedCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfUncheckedCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjUncheckedCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutInfo_pagamentoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutInfo_pagamentoInput, pedidoUncheckedCreateWithoutInfo_pagamentoInput>
  }

  export type pedidoUpsertWithoutInfo_pagamentoInput = {
    update: XOR<pedidoUpdateWithoutInfo_pagamentoInput, pedidoUncheckedUpdateWithoutInfo_pagamentoInput>
    create: XOR<pedidoCreateWithoutInfo_pagamentoInput, pedidoUncheckedCreateWithoutInfo_pagamentoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutInfo_pagamentoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutInfo_pagamentoInput, pedidoUncheckedUpdateWithoutInfo_pagamentoInput>
  }

  export type pedidoUpdateWithoutInfo_pagamentoInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUpdateOneWithoutPedidoNestedInput
    destino?: destinoUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutInfo_pagamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedUpdateOneWithoutPedidoNestedInput
    destino?: destinoUncheckedUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUncheckedUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUncheckedUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateWithoutInfo_pfInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioCreateNestedOneWithoutPedidoInput
    destino?: destinoCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutPedidoInput
    cliente: clienteCreateNestedOneWithoutPedidoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutInfo_pfInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedCreateNestedOneWithoutPedidoInput
    destino?: destinoUncheckedCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjUncheckedCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutInfo_pfInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutInfo_pfInput, pedidoUncheckedCreateWithoutInfo_pfInput>
  }

  export type pedidoUpsertWithoutInfo_pfInput = {
    update: XOR<pedidoUpdateWithoutInfo_pfInput, pedidoUncheckedUpdateWithoutInfo_pfInput>
    create: XOR<pedidoCreateWithoutInfo_pfInput, pedidoUncheckedCreateWithoutInfo_pfInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutInfo_pfInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutInfo_pfInput, pedidoUncheckedUpdateWithoutInfo_pfInput>
  }

  export type pedidoUpdateWithoutInfo_pfInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUpdateOneWithoutPedidoNestedInput
    destino?: destinoUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutInfo_pfInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedUpdateOneWithoutPedidoNestedInput
    destino?: destinoUncheckedUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUncheckedUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateWithoutInfo_pjInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioCreateNestedOneWithoutPedidoInput
    destino?: destinoCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutPedidoInput
    cliente: clienteCreateNestedOneWithoutPedidoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutInfo_pjInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedCreateNestedOneWithoutPedidoInput
    destino?: destinoUncheckedCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfUncheckedCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutInfo_pjInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutInfo_pjInput, pedidoUncheckedCreateWithoutInfo_pjInput>
  }

  export type pedidoUpsertWithoutInfo_pjInput = {
    update: XOR<pedidoUpdateWithoutInfo_pjInput, pedidoUncheckedUpdateWithoutInfo_pjInput>
    create: XOR<pedidoCreateWithoutInfo_pjInput, pedidoUncheckedCreateWithoutInfo_pjInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutInfo_pjInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutInfo_pjInput, pedidoUncheckedUpdateWithoutInfo_pjInput>
  }

  export type pedidoUpdateWithoutInfo_pjInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUpdateOneWithoutPedidoNestedInput
    destino?: destinoUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutInfo_pjInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedUpdateOneWithoutPedidoNestedInput
    destino?: destinoUncheckedUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUncheckedUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateWithoutIntercorrenciaInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioCreateNestedOneWithoutPedidoInput
    destino?: destinoCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjCreateNestedOneWithoutPedidoInput
    cliente: clienteCreateNestedOneWithoutPedidoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutIntercorrenciaInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedCreateNestedOneWithoutPedidoInput
    destino?: destinoUncheckedCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfUncheckedCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjUncheckedCreateNestedOneWithoutPedidoInput
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutIntercorrenciaInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutIntercorrenciaInput, pedidoUncheckedCreateWithoutIntercorrenciaInput>
  }

  export type usuarioCreateWithoutIntercorrenciaInput = {
    nome: string
    login: string
    senha: string
    tipo: $Enums.usuario_tipo
    cliente?: clienteCreateNestedManyWithoutUsuarioInput
    produto?: produtoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutIntercorrenciaInput = {
    id?: number
    nome: string
    login: string
    senha: string
    tipo: $Enums.usuario_tipo
    cliente?: clienteUncheckedCreateNestedManyWithoutUsuarioInput
    produto?: produtoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutIntercorrenciaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutIntercorrenciaInput, usuarioUncheckedCreateWithoutIntercorrenciaInput>
  }

  export type pedidoUpsertWithoutIntercorrenciaInput = {
    update: XOR<pedidoUpdateWithoutIntercorrenciaInput, pedidoUncheckedUpdateWithoutIntercorrenciaInput>
    create: XOR<pedidoCreateWithoutIntercorrenciaInput, pedidoUncheckedCreateWithoutIntercorrenciaInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutIntercorrenciaInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutIntercorrenciaInput, pedidoUncheckedUpdateWithoutIntercorrenciaInput>
  }

  export type pedidoUpdateWithoutIntercorrenciaInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUpdateOneWithoutPedidoNestedInput
    destino?: destinoUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUpdateOneWithoutPedidoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutIntercorrenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedUpdateOneWithoutPedidoNestedInput
    destino?: destinoUncheckedUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUncheckedUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUncheckedUpdateOneWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type usuarioUpsertWithoutIntercorrenciaInput = {
    update: XOR<usuarioUpdateWithoutIntercorrenciaInput, usuarioUncheckedUpdateWithoutIntercorrenciaInput>
    create: XOR<usuarioCreateWithoutIntercorrenciaInput, usuarioUncheckedCreateWithoutIntercorrenciaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutIntercorrenciaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutIntercorrenciaInput, usuarioUncheckedUpdateWithoutIntercorrenciaInput>
  }

  export type usuarioUpdateWithoutIntercorrenciaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    cliente?: clienteUpdateManyWithoutUsuarioNestedInput
    produto?: produtoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutIntercorrenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    cliente?: clienteUncheckedUpdateManyWithoutUsuarioNestedInput
    produto?: produtoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type destinatarioCreateWithoutPedidoInput = {
    info: string
  }

  export type destinatarioUncheckedCreateWithoutPedidoInput = {
    info: string
  }

  export type destinatarioCreateOrConnectWithoutPedidoInput = {
    where: destinatarioWhereUniqueInput
    create: XOR<destinatarioCreateWithoutPedidoInput, destinatarioUncheckedCreateWithoutPedidoInput>
  }

  export type destinoCreateWithoutPedidoInput = {
    logradouro: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    pais: string
  }

  export type destinoUncheckedCreateWithoutPedidoInput = {
    logradouro: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    pais: string
  }

  export type destinoCreateOrConnectWithoutPedidoInput = {
    where: destinoWhereUniqueInput
    create: XOR<destinoCreateWithoutPedidoInput, destinoUncheckedCreateWithoutPedidoInput>
  }

  export type est_andamento_pedidoCreateWithoutPedidoInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    est_andamento: est_andamentoCreateNestedOneWithoutEst_andamento_pedidoInput
  }

  export type est_andamento_pedidoUncheckedCreateWithoutPedidoInput = {
    id_est_andamento: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
  }

  export type est_andamento_pedidoCreateOrConnectWithoutPedidoInput = {
    where: est_andamento_pedidoWhereUniqueInput
    create: XOR<est_andamento_pedidoCreateWithoutPedidoInput, est_andamento_pedidoUncheckedCreateWithoutPedidoInput>
  }

  export type est_andamento_pedidoCreateManyPedidoInputEnvelope = {
    data: est_andamento_pedidoCreateManyPedidoInput | est_andamento_pedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type info_cancelamentoCreateWithoutPedidoInput = {
    justificativa: string
  }

  export type info_cancelamentoUncheckedCreateWithoutPedidoInput = {
    justificativa: string
  }

  export type info_cancelamentoCreateOrConnectWithoutPedidoInput = {
    where: info_cancelamentoWhereUniqueInput
    create: XOR<info_cancelamentoCreateWithoutPedidoInput, info_cancelamentoUncheckedCreateWithoutPedidoInput>
  }

  export type info_pagamentoCreateWithoutPedidoInput = {
    dt_vencimento?: Date | string | null
    dt_pago?: Date | string | null
  }

  export type info_pagamentoUncheckedCreateWithoutPedidoInput = {
    dt_vencimento?: Date | string | null
    dt_pago?: Date | string | null
  }

  export type info_pagamentoCreateOrConnectWithoutPedidoInput = {
    where: info_pagamentoWhereUniqueInput
    create: XOR<info_pagamentoCreateWithoutPedidoInput, info_pagamentoUncheckedCreateWithoutPedidoInput>
  }

  export type info_pfCreateWithoutPedidoInput = {
    nome_cliente: string
    cpf: string
  }

  export type info_pfUncheckedCreateWithoutPedidoInput = {
    nome_cliente: string
    cpf: string
  }

  export type info_pfCreateOrConnectWithoutPedidoInput = {
    where: info_pfWhereUniqueInput
    create: XOR<info_pfCreateWithoutPedidoInput, info_pfUncheckedCreateWithoutPedidoInput>
  }

  export type info_pjCreateWithoutPedidoInput = {
    cnpj: string
    nome_fantasia: string
    nome_empresarial: string
  }

  export type info_pjUncheckedCreateWithoutPedidoInput = {
    cnpj: string
    nome_fantasia: string
    nome_empresarial: string
  }

  export type info_pjCreateOrConnectWithoutPedidoInput = {
    where: info_pjWhereUniqueInput
    create: XOR<info_pjCreateWithoutPedidoInput, info_pjUncheckedCreateWithoutPedidoInput>
  }

  export type intercorrenciaCreateWithoutPedidoInput = {
    id_intercorrencia: number
    descricao: string
    dthr_criacao?: Date | string
    usuario: usuarioCreateNestedOneWithoutIntercorrenciaInput
  }

  export type intercorrenciaUncheckedCreateWithoutPedidoInput = {
    id_intercorrencia: number
    descricao: string
    dthr_criacao?: Date | string
    id_usuario_autor: number
  }

  export type intercorrenciaCreateOrConnectWithoutPedidoInput = {
    where: intercorrenciaWhereUniqueInput
    create: XOR<intercorrenciaCreateWithoutPedidoInput, intercorrenciaUncheckedCreateWithoutPedidoInput>
  }

  export type intercorrenciaCreateManyPedidoInputEnvelope = {
    data: intercorrenciaCreateManyPedidoInput | intercorrenciaCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type clienteCreateWithoutPedidoInput = {
    nome: string
    telefone: string
    dthr_alt?: Date | string | null
    usuario?: usuarioCreateNestedOneWithoutClienteInput
  }

  export type clienteUncheckedCreateWithoutPedidoInput = {
    id?: number
    nome: string
    telefone: string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
  }

  export type clienteCreateOrConnectWithoutPedidoInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
  }

  export type produto_pedidoCreateWithoutPedidoInput = {
    quantidade: number
    preco_venda: Decimal | DecimalJsLike | number | string
    preco_custo: Decimal | DecimalJsLike | number | string
    info_adicional?: string | null
    produto: produtoCreateNestedOneWithoutProduto_pedidoInput
  }

  export type produto_pedidoUncheckedCreateWithoutPedidoInput = {
    id_produto: number
    quantidade: number
    preco_venda: Decimal | DecimalJsLike | number | string
    preco_custo: Decimal | DecimalJsLike | number | string
    info_adicional?: string | null
  }

  export type produto_pedidoCreateOrConnectWithoutPedidoInput = {
    where: produto_pedidoWhereUniqueInput
    create: XOR<produto_pedidoCreateWithoutPedidoInput, produto_pedidoUncheckedCreateWithoutPedidoInput>
  }

  export type produto_pedidoCreateManyPedidoInputEnvelope = {
    data: produto_pedidoCreateManyPedidoInput | produto_pedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type destinatarioUpsertWithoutPedidoInput = {
    update: XOR<destinatarioUpdateWithoutPedidoInput, destinatarioUncheckedUpdateWithoutPedidoInput>
    create: XOR<destinatarioCreateWithoutPedidoInput, destinatarioUncheckedCreateWithoutPedidoInput>
    where?: destinatarioWhereInput
  }

  export type destinatarioUpdateToOneWithWhereWithoutPedidoInput = {
    where?: destinatarioWhereInput
    data: XOR<destinatarioUpdateWithoutPedidoInput, destinatarioUncheckedUpdateWithoutPedidoInput>
  }

  export type destinatarioUpdateWithoutPedidoInput = {
    info?: StringFieldUpdateOperationsInput | string
  }

  export type destinatarioUncheckedUpdateWithoutPedidoInput = {
    info?: StringFieldUpdateOperationsInput | string
  }

  export type destinoUpsertWithoutPedidoInput = {
    update: XOR<destinoUpdateWithoutPedidoInput, destinoUncheckedUpdateWithoutPedidoInput>
    create: XOR<destinoCreateWithoutPedidoInput, destinoUncheckedCreateWithoutPedidoInput>
    where?: destinoWhereInput
  }

  export type destinoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: destinoWhereInput
    data: XOR<destinoUpdateWithoutPedidoInput, destinoUncheckedUpdateWithoutPedidoInput>
  }

  export type destinoUpdateWithoutPedidoInput = {
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
  }

  export type destinoUncheckedUpdateWithoutPedidoInput = {
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
  }

  export type est_andamento_pedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: est_andamento_pedidoWhereUniqueInput
    update: XOR<est_andamento_pedidoUpdateWithoutPedidoInput, est_andamento_pedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<est_andamento_pedidoCreateWithoutPedidoInput, est_andamento_pedidoUncheckedCreateWithoutPedidoInput>
  }

  export type est_andamento_pedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: est_andamento_pedidoWhereUniqueInput
    data: XOR<est_andamento_pedidoUpdateWithoutPedidoInput, est_andamento_pedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type est_andamento_pedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: est_andamento_pedidoScalarWhereInput
    data: XOR<est_andamento_pedidoUpdateManyMutationInput, est_andamento_pedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type info_cancelamentoUpsertWithoutPedidoInput = {
    update: XOR<info_cancelamentoUpdateWithoutPedidoInput, info_cancelamentoUncheckedUpdateWithoutPedidoInput>
    create: XOR<info_cancelamentoCreateWithoutPedidoInput, info_cancelamentoUncheckedCreateWithoutPedidoInput>
    where?: info_cancelamentoWhereInput
  }

  export type info_cancelamentoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: info_cancelamentoWhereInput
    data: XOR<info_cancelamentoUpdateWithoutPedidoInput, info_cancelamentoUncheckedUpdateWithoutPedidoInput>
  }

  export type info_cancelamentoUpdateWithoutPedidoInput = {
    justificativa?: StringFieldUpdateOperationsInput | string
  }

  export type info_cancelamentoUncheckedUpdateWithoutPedidoInput = {
    justificativa?: StringFieldUpdateOperationsInput | string
  }

  export type info_pagamentoUpsertWithoutPedidoInput = {
    update: XOR<info_pagamentoUpdateWithoutPedidoInput, info_pagamentoUncheckedUpdateWithoutPedidoInput>
    create: XOR<info_pagamentoCreateWithoutPedidoInput, info_pagamentoUncheckedCreateWithoutPedidoInput>
    where?: info_pagamentoWhereInput
  }

  export type info_pagamentoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: info_pagamentoWhereInput
    data: XOR<info_pagamentoUpdateWithoutPedidoInput, info_pagamentoUncheckedUpdateWithoutPedidoInput>
  }

  export type info_pagamentoUpdateWithoutPedidoInput = {
    dt_vencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type info_pagamentoUncheckedUpdateWithoutPedidoInput = {
    dt_vencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type info_pfUpsertWithoutPedidoInput = {
    update: XOR<info_pfUpdateWithoutPedidoInput, info_pfUncheckedUpdateWithoutPedidoInput>
    create: XOR<info_pfCreateWithoutPedidoInput, info_pfUncheckedCreateWithoutPedidoInput>
    where?: info_pfWhereInput
  }

  export type info_pfUpdateToOneWithWhereWithoutPedidoInput = {
    where?: info_pfWhereInput
    data: XOR<info_pfUpdateWithoutPedidoInput, info_pfUncheckedUpdateWithoutPedidoInput>
  }

  export type info_pfUpdateWithoutPedidoInput = {
    nome_cliente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type info_pfUncheckedUpdateWithoutPedidoInput = {
    nome_cliente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type info_pjUpsertWithoutPedidoInput = {
    update: XOR<info_pjUpdateWithoutPedidoInput, info_pjUncheckedUpdateWithoutPedidoInput>
    create: XOR<info_pjCreateWithoutPedidoInput, info_pjUncheckedCreateWithoutPedidoInput>
    where?: info_pjWhereInput
  }

  export type info_pjUpdateToOneWithWhereWithoutPedidoInput = {
    where?: info_pjWhereInput
    data: XOR<info_pjUpdateWithoutPedidoInput, info_pjUncheckedUpdateWithoutPedidoInput>
  }

  export type info_pjUpdateWithoutPedidoInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    nome_empresarial?: StringFieldUpdateOperationsInput | string
  }

  export type info_pjUncheckedUpdateWithoutPedidoInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    nome_empresarial?: StringFieldUpdateOperationsInput | string
  }

  export type intercorrenciaUpsertWithWhereUniqueWithoutPedidoInput = {
    where: intercorrenciaWhereUniqueInput
    update: XOR<intercorrenciaUpdateWithoutPedidoInput, intercorrenciaUncheckedUpdateWithoutPedidoInput>
    create: XOR<intercorrenciaCreateWithoutPedidoInput, intercorrenciaUncheckedCreateWithoutPedidoInput>
  }

  export type intercorrenciaUpdateWithWhereUniqueWithoutPedidoInput = {
    where: intercorrenciaWhereUniqueInput
    data: XOR<intercorrenciaUpdateWithoutPedidoInput, intercorrenciaUncheckedUpdateWithoutPedidoInput>
  }

  export type intercorrenciaUpdateManyWithWhereWithoutPedidoInput = {
    where: intercorrenciaScalarWhereInput
    data: XOR<intercorrenciaUpdateManyMutationInput, intercorrenciaUncheckedUpdateManyWithoutPedidoInput>
  }

  export type intercorrenciaScalarWhereInput = {
    AND?: intercorrenciaScalarWhereInput | intercorrenciaScalarWhereInput[]
    OR?: intercorrenciaScalarWhereInput[]
    NOT?: intercorrenciaScalarWhereInput | intercorrenciaScalarWhereInput[]
    id_intercorrencia?: IntFilter<"intercorrencia"> | number
    id_pedido?: IntFilter<"intercorrencia"> | number
    descricao?: StringFilter<"intercorrencia"> | string
    dthr_criacao?: DateTimeFilter<"intercorrencia"> | Date | string
    id_usuario_autor?: IntFilter<"intercorrencia"> | number
  }

  export type clienteUpsertWithoutPedidoInput = {
    update: XOR<clienteUpdateWithoutPedidoInput, clienteUncheckedUpdateWithoutPedidoInput>
    create: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutPedidoInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutPedidoInput, clienteUncheckedUpdateWithoutPedidoInput>
  }

  export type clienteUpdateWithoutPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type produto_pedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: produto_pedidoWhereUniqueInput
    update: XOR<produto_pedidoUpdateWithoutPedidoInput, produto_pedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<produto_pedidoCreateWithoutPedidoInput, produto_pedidoUncheckedCreateWithoutPedidoInput>
  }

  export type produto_pedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: produto_pedidoWhereUniqueInput
    data: XOR<produto_pedidoUpdateWithoutPedidoInput, produto_pedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type produto_pedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: produto_pedidoScalarWhereInput
    data: XOR<produto_pedidoUpdateManyMutationInput, produto_pedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type produto_pedidoScalarWhereInput = {
    AND?: produto_pedidoScalarWhereInput | produto_pedidoScalarWhereInput[]
    OR?: produto_pedidoScalarWhereInput[]
    NOT?: produto_pedidoScalarWhereInput | produto_pedidoScalarWhereInput[]
    id_produto?: IntFilter<"produto_pedido"> | number
    id_pedido?: IntFilter<"produto_pedido"> | number
    quantidade?: IntFilter<"produto_pedido"> | number
    preco_venda?: DecimalFilter<"produto_pedido"> | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFilter<"produto_pedido"> | Decimal | DecimalJsLike | number | string
    info_adicional?: StringNullableFilter<"produto_pedido"> | string | null
  }

  export type categoriaCreateWithoutProdutoInput = {
    nome: string
    descricao?: string | null
  }

  export type categoriaUncheckedCreateWithoutProdutoInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type categoriaCreateOrConnectWithoutProdutoInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutProdutoInput, categoriaUncheckedCreateWithoutProdutoInput>
  }

  export type unidadeCreateWithoutProdutoInput = {
    nome: string
    abreviacao: string
  }

  export type unidadeUncheckedCreateWithoutProdutoInput = {
    id?: number
    nome: string
    abreviacao: string
  }

  export type unidadeCreateOrConnectWithoutProdutoInput = {
    where: unidadeWhereUniqueInput
    create: XOR<unidadeCreateWithoutProdutoInput, unidadeUncheckedCreateWithoutProdutoInput>
  }

  export type usuarioCreateWithoutProdutoInput = {
    nome: string
    login: string
    senha: string
    tipo: $Enums.usuario_tipo
    cliente?: clienteCreateNestedManyWithoutUsuarioInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutProdutoInput = {
    id?: number
    nome: string
    login: string
    senha: string
    tipo: $Enums.usuario_tipo
    cliente?: clienteUncheckedCreateNestedManyWithoutUsuarioInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutProdutoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutProdutoInput, usuarioUncheckedCreateWithoutProdutoInput>
  }

  export type produto_pedidoCreateWithoutProdutoInput = {
    quantidade: number
    preco_venda: Decimal | DecimalJsLike | number | string
    preco_custo: Decimal | DecimalJsLike | number | string
    info_adicional?: string | null
    pedido: pedidoCreateNestedOneWithoutProduto_pedidoInput
  }

  export type produto_pedidoUncheckedCreateWithoutProdutoInput = {
    id_pedido: number
    quantidade: number
    preco_venda: Decimal | DecimalJsLike | number | string
    preco_custo: Decimal | DecimalJsLike | number | string
    info_adicional?: string | null
  }

  export type produto_pedidoCreateOrConnectWithoutProdutoInput = {
    where: produto_pedidoWhereUniqueInput
    create: XOR<produto_pedidoCreateWithoutProdutoInput, produto_pedidoUncheckedCreateWithoutProdutoInput>
  }

  export type produto_pedidoCreateManyProdutoInputEnvelope = {
    data: produto_pedidoCreateManyProdutoInput | produto_pedidoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type categoriaUpsertWithoutProdutoInput = {
    update: XOR<categoriaUpdateWithoutProdutoInput, categoriaUncheckedUpdateWithoutProdutoInput>
    create: XOR<categoriaCreateWithoutProdutoInput, categoriaUncheckedCreateWithoutProdutoInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutProdutoInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutProdutoInput, categoriaUncheckedUpdateWithoutProdutoInput>
  }

  export type categoriaUpdateWithoutProdutoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type unidadeUpsertWithoutProdutoInput = {
    update: XOR<unidadeUpdateWithoutProdutoInput, unidadeUncheckedUpdateWithoutProdutoInput>
    create: XOR<unidadeCreateWithoutProdutoInput, unidadeUncheckedCreateWithoutProdutoInput>
    where?: unidadeWhereInput
  }

  export type unidadeUpdateToOneWithWhereWithoutProdutoInput = {
    where?: unidadeWhereInput
    data: XOR<unidadeUpdateWithoutProdutoInput, unidadeUncheckedUpdateWithoutProdutoInput>
  }

  export type unidadeUpdateWithoutProdutoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
  }

  export type unidadeUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUpsertWithoutProdutoInput = {
    update: XOR<usuarioUpdateWithoutProdutoInput, usuarioUncheckedUpdateWithoutProdutoInput>
    create: XOR<usuarioCreateWithoutProdutoInput, usuarioUncheckedCreateWithoutProdutoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutProdutoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutProdutoInput, usuarioUncheckedUpdateWithoutProdutoInput>
  }

  export type usuarioUpdateWithoutProdutoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    cliente?: clienteUpdateManyWithoutUsuarioNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    cliente?: clienteUncheckedUpdateManyWithoutUsuarioNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type produto_pedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: produto_pedidoWhereUniqueInput
    update: XOR<produto_pedidoUpdateWithoutProdutoInput, produto_pedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<produto_pedidoCreateWithoutProdutoInput, produto_pedidoUncheckedCreateWithoutProdutoInput>
  }

  export type produto_pedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: produto_pedidoWhereUniqueInput
    data: XOR<produto_pedidoUpdateWithoutProdutoInput, produto_pedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type produto_pedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: produto_pedidoScalarWhereInput
    data: XOR<produto_pedidoUpdateManyMutationInput, produto_pedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type pedidoCreateWithoutProduto_pedidoInput = {
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioCreateNestedOneWithoutPedidoInput
    destino?: destinoCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaCreateNestedManyWithoutPedidoInput
    cliente: clienteCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutProduto_pedidoInput = {
    id?: number
    id_cliente: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedCreateNestedOneWithoutPedidoInput
    destino?: destinoUncheckedCreateNestedOneWithoutPedidoInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    info_cancelamento?: info_cancelamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pagamento?: info_pagamentoUncheckedCreateNestedOneWithoutPedidoInput
    info_pf?: info_pfUncheckedCreateNestedOneWithoutPedidoInput
    info_pj?: info_pjUncheckedCreateNestedOneWithoutPedidoInput
    intercorrencia?: intercorrenciaUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutProduto_pedidoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutProduto_pedidoInput, pedidoUncheckedCreateWithoutProduto_pedidoInput>
  }

  export type produtoCreateWithoutProduto_pedidoInput = {
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    dthr_alt?: Date | string | null
    estado?: boolean
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    unidade: unidadeCreateNestedOneWithoutProdutoInput
    usuario?: usuarioCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutProduto_pedidoInput = {
    id?: number
    id_categoria: number
    id_unidade: number
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    estado?: boolean
  }

  export type produtoCreateOrConnectWithoutProduto_pedidoInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutProduto_pedidoInput, produtoUncheckedCreateWithoutProduto_pedidoInput>
  }

  export type pedidoUpsertWithoutProduto_pedidoInput = {
    update: XOR<pedidoUpdateWithoutProduto_pedidoInput, pedidoUncheckedUpdateWithoutProduto_pedidoInput>
    create: XOR<pedidoCreateWithoutProduto_pedidoInput, pedidoUncheckedCreateWithoutProduto_pedidoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutProduto_pedidoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutProduto_pedidoInput, pedidoUncheckedUpdateWithoutProduto_pedidoInput>
  }

  export type pedidoUpdateWithoutProduto_pedidoInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUpdateOneWithoutPedidoNestedInput
    destino?: destinoUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutPedidoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutProduto_pedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedUpdateOneWithoutPedidoNestedInput
    destino?: destinoUncheckedUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUncheckedUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUncheckedUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type produtoUpsertWithoutProduto_pedidoInput = {
    update: XOR<produtoUpdateWithoutProduto_pedidoInput, produtoUncheckedUpdateWithoutProduto_pedidoInput>
    create: XOR<produtoCreateWithoutProduto_pedidoInput, produtoUncheckedCreateWithoutProduto_pedidoInput>
    where?: produtoWhereInput
  }

  export type produtoUpdateToOneWithWhereWithoutProduto_pedidoInput = {
    where?: produtoWhereInput
    data: XOR<produtoUpdateWithoutProduto_pedidoInput, produtoUncheckedUpdateWithoutProduto_pedidoInput>
  }

  export type produtoUpdateWithoutProduto_pedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    unidade?: unidadeUpdateOneRequiredWithoutProdutoNestedInput
    usuario?: usuarioUpdateOneWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutProduto_pedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_unidade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type produtoCreateWithoutUnidadeInput = {
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    dthr_alt?: Date | string | null
    estado?: boolean
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    usuario?: usuarioCreateNestedOneWithoutProdutoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutUnidadeInput = {
    id?: number
    id_categoria: number
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    estado?: boolean
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutUnidadeInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutUnidadeInput, produtoUncheckedCreateWithoutUnidadeInput>
  }

  export type produtoCreateManyUnidadeInputEnvelope = {
    data: produtoCreateManyUnidadeInput | produtoCreateManyUnidadeInput[]
    skipDuplicates?: boolean
  }

  export type produtoUpsertWithWhereUniqueWithoutUnidadeInput = {
    where: produtoWhereUniqueInput
    update: XOR<produtoUpdateWithoutUnidadeInput, produtoUncheckedUpdateWithoutUnidadeInput>
    create: XOR<produtoCreateWithoutUnidadeInput, produtoUncheckedCreateWithoutUnidadeInput>
  }

  export type produtoUpdateWithWhereUniqueWithoutUnidadeInput = {
    where: produtoWhereUniqueInput
    data: XOR<produtoUpdateWithoutUnidadeInput, produtoUncheckedUpdateWithoutUnidadeInput>
  }

  export type produtoUpdateManyWithWhereWithoutUnidadeInput = {
    where: produtoScalarWhereInput
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyWithoutUnidadeInput>
  }

  export type clienteCreateWithoutUsuarioInput = {
    nome: string
    telefone: string
    dthr_alt?: Date | string | null
    pedido?: pedidoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    telefone: string
    dthr_alt?: Date | string | null
    pedido?: pedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteCreateOrConnectWithoutUsuarioInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutUsuarioInput, clienteUncheckedCreateWithoutUsuarioInput>
  }

  export type clienteCreateManyUsuarioInputEnvelope = {
    data: clienteCreateManyUsuarioInput | clienteCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type intercorrenciaCreateWithoutUsuarioInput = {
    id_intercorrencia: number
    descricao: string
    dthr_criacao?: Date | string
    pedido: pedidoCreateNestedOneWithoutIntercorrenciaInput
  }

  export type intercorrenciaUncheckedCreateWithoutUsuarioInput = {
    id_intercorrencia: number
    id_pedido: number
    descricao: string
    dthr_criacao?: Date | string
  }

  export type intercorrenciaCreateOrConnectWithoutUsuarioInput = {
    where: intercorrenciaWhereUniqueInput
    create: XOR<intercorrenciaCreateWithoutUsuarioInput, intercorrenciaUncheckedCreateWithoutUsuarioInput>
  }

  export type intercorrenciaCreateManyUsuarioInputEnvelope = {
    data: intercorrenciaCreateManyUsuarioInput | intercorrenciaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type produtoCreateWithoutUsuarioInput = {
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    dthr_alt?: Date | string | null
    estado?: boolean
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    unidade: unidadeCreateNestedOneWithoutProdutoInput
    produto_pedido?: produto_pedidoCreateNestedManyWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    id_categoria: number
    id_unidade: number
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    dthr_alt?: Date | string | null
    estado?: boolean
    produto_pedido?: produto_pedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutUsuarioInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutUsuarioInput, produtoUncheckedCreateWithoutUsuarioInput>
  }

  export type produtoCreateManyUsuarioInputEnvelope = {
    data: produtoCreateManyUsuarioInput | produtoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type clienteUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: clienteWhereUniqueInput
    update: XOR<clienteUpdateWithoutUsuarioInput, clienteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<clienteCreateWithoutUsuarioInput, clienteUncheckedCreateWithoutUsuarioInput>
  }

  export type clienteUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: clienteWhereUniqueInput
    data: XOR<clienteUpdateWithoutUsuarioInput, clienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type clienteUpdateManyWithWhereWithoutUsuarioInput = {
    where: clienteScalarWhereInput
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type clienteScalarWhereInput = {
    AND?: clienteScalarWhereInput | clienteScalarWhereInput[]
    OR?: clienteScalarWhereInput[]
    NOT?: clienteScalarWhereInput | clienteScalarWhereInput[]
    id?: IntFilter<"cliente"> | number
    nome?: StringFilter<"cliente"> | string
    telefone?: StringFilter<"cliente"> | string
    id_usuario_alt?: IntNullableFilter<"cliente"> | number | null
    dthr_alt?: DateTimeNullableFilter<"cliente"> | Date | string | null
  }

  export type intercorrenciaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: intercorrenciaWhereUniqueInput
    update: XOR<intercorrenciaUpdateWithoutUsuarioInput, intercorrenciaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<intercorrenciaCreateWithoutUsuarioInput, intercorrenciaUncheckedCreateWithoutUsuarioInput>
  }

  export type intercorrenciaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: intercorrenciaWhereUniqueInput
    data: XOR<intercorrenciaUpdateWithoutUsuarioInput, intercorrenciaUncheckedUpdateWithoutUsuarioInput>
  }

  export type intercorrenciaUpdateManyWithWhereWithoutUsuarioInput = {
    where: intercorrenciaScalarWhereInput
    data: XOR<intercorrenciaUpdateManyMutationInput, intercorrenciaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type produtoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: produtoWhereUniqueInput
    update: XOR<produtoUpdateWithoutUsuarioInput, produtoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<produtoCreateWithoutUsuarioInput, produtoUncheckedCreateWithoutUsuarioInput>
  }

  export type produtoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: produtoWhereUniqueInput
    data: XOR<produtoUpdateWithoutUsuarioInput, produtoUncheckedUpdateWithoutUsuarioInput>
  }

  export type produtoUpdateManyWithWhereWithoutUsuarioInput = {
    where: produtoScalarWhereInput
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type produtoCreateManyCategoriaInput = {
    id?: number
    id_unidade: number
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    estado?: boolean
  }

  export type produtoUpdateWithoutCategoriaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    unidade?: unidadeUpdateOneRequiredWithoutProdutoNestedInput
    usuario?: usuarioUpdateOneWithoutProdutoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_unidade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_unidade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pedidoCreateManyClienteInput = {
    id?: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    tipo_entrega: $Enums.pedido_tipo_entrega
    dthr_entregar: Date | string
    preco_frete?: Decimal | DecimalJsLike | number | string
    tx_desconto?: number
    preco_final: Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: Date | string | null
    dt_pago?: Date | string | null
    preco_custo_total: Decimal | DecimalJsLike | number | string
  }

  export type pedidoUpdateWithoutClienteInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUpdateOneWithoutPedidoNestedInput
    destino?: destinoUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUpdateManyWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destinatario?: destinatarioUncheckedUpdateOneWithoutPedidoNestedInput
    destino?: destinoUncheckedUpdateOneWithoutPedidoNestedInput
    est_andamento_pedido?: est_andamento_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    info_cancelamento?: info_cancelamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pagamento?: info_pagamentoUncheckedUpdateOneWithoutPedidoNestedInput
    info_pf?: info_pfUncheckedUpdateOneWithoutPedidoNestedInput
    info_pj?: info_pjUncheckedUpdateOneWithoutPedidoNestedInput
    intercorrencia?: intercorrenciaUncheckedUpdateManyWithoutPedidoNestedInput
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_entrega?: Enumpedido_tipo_entregaFieldUpdateOperationsInput | $Enums.pedido_tipo_entrega
    dthr_entregar?: DateTimeFieldUpdateOperationsInput | Date | string
    preco_frete?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tx_desconto?: IntFieldUpdateOperationsInput | number
    preco_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dt_venc_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preco_custo_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type est_andamento_pedidoCreateManyEst_andamentoInput = {
    id_pedido: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
  }

  export type est_andamento_pedidoUpdateWithoutEst_andamentoInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateOneRequiredWithoutEst_andamento_pedidoNestedInput
  }

  export type est_andamento_pedidoUncheckedUpdateWithoutEst_andamentoInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type est_andamento_pedidoUncheckedUpdateManyWithoutEst_andamentoInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type est_andamento_pedidoCreateManyPedidoInput = {
    id_est_andamento: number
    id_usuario_autor: number
    dthr_criacao?: Date | string
  }

  export type intercorrenciaCreateManyPedidoInput = {
    id_intercorrencia: number
    descricao: string
    dthr_criacao?: Date | string
    id_usuario_autor: number
  }

  export type produto_pedidoCreateManyPedidoInput = {
    id_produto: number
    quantidade: number
    preco_venda: Decimal | DecimalJsLike | number | string
    preco_custo: Decimal | DecimalJsLike | number | string
    info_adicional?: string | null
  }

  export type est_andamento_pedidoUpdateWithoutPedidoInput = {
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    est_andamento?: est_andamentoUpdateOneRequiredWithoutEst_andamento_pedidoNestedInput
  }

  export type est_andamento_pedidoUncheckedUpdateWithoutPedidoInput = {
    id_est_andamento?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type est_andamento_pedidoUncheckedUpdateManyWithoutPedidoInput = {
    id_est_andamento?: IntFieldUpdateOperationsInput | number
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intercorrenciaUpdateWithoutPedidoInput = {
    id_intercorrencia?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutIntercorrenciaNestedInput
  }

  export type intercorrenciaUncheckedUpdateWithoutPedidoInput = {
    id_intercorrencia?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
  }

  export type intercorrenciaUncheckedUpdateManyWithoutPedidoInput = {
    id_intercorrencia?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario_autor?: IntFieldUpdateOperationsInput | number
  }

  export type produto_pedidoUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info_adicional?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: produtoUpdateOneRequiredWithoutProduto_pedidoNestedInput
  }

  export type produto_pedidoUncheckedUpdateWithoutPedidoInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info_adicional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produto_pedidoUncheckedUpdateManyWithoutPedidoInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info_adicional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produto_pedidoCreateManyProdutoInput = {
    id_pedido: number
    quantidade: number
    preco_venda: Decimal | DecimalJsLike | number | string
    preco_custo: Decimal | DecimalJsLike | number | string
    info_adicional?: string | null
  }

  export type produto_pedidoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info_adicional?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: pedidoUpdateOneRequiredWithoutProduto_pedidoNestedInput
  }

  export type produto_pedidoUncheckedUpdateWithoutProdutoInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info_adicional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produto_pedidoUncheckedUpdateManyWithoutProdutoInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info_adicional?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtoCreateManyUnidadeInput = {
    id?: number
    id_categoria: number
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    id_usuario_alt?: number | null
    dthr_alt?: Date | string | null
    estado?: boolean
  }

  export type produtoUpdateWithoutUnidadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    usuario?: usuarioUpdateOneWithoutProdutoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutUnidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateManyWithoutUnidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_usuario_alt?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type clienteCreateManyUsuarioInput = {
    id?: number
    nome: string
    telefone: string
    dthr_alt?: Date | string | null
  }

  export type intercorrenciaCreateManyUsuarioInput = {
    id_intercorrencia: number
    id_pedido: number
    descricao: string
    dthr_criacao?: Date | string
  }

  export type produtoCreateManyUsuarioInput = {
    id?: number
    id_categoria: number
    id_unidade: number
    nome: string
    preco_venda?: Decimal | DecimalJsLike | number | string
    preco_custo?: Decimal | DecimalJsLike | number | string
    dthr_alt?: Date | string | null
    estado?: boolean
  }

  export type clienteUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido?: pedidoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido?: pedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type intercorrenciaUpdateWithoutUsuarioInput = {
    id_intercorrencia?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateOneRequiredWithoutIntercorrenciaNestedInput
  }

  export type intercorrenciaUncheckedUpdateWithoutUsuarioInput = {
    id_intercorrencia?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intercorrenciaUncheckedUpdateManyWithoutUsuarioInput = {
    id_intercorrencia?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dthr_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type produtoUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    unidade?: unidadeUpdateOneRequiredWithoutProdutoNestedInput
    produto_pedido?: produto_pedidoUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_unidade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    produto_pedido?: produto_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    id_unidade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco_venda?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_custo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dthr_alt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}