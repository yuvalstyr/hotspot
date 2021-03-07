export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type WorkoutRelateToManyInput = {
  create?: Maybe<Array<Maybe<WorkoutCreateInput>>>
  connect?: Maybe<Array<Maybe<WorkoutWhereUniqueInput>>>
  disconnect?: Maybe<Array<Maybe<WorkoutWhereUniqueInput>>>
  disconnectAll?: Maybe<Scalars['Boolean']>
}

/**  A keystone list  */
export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password_is_set?: Maybe<Scalars['Boolean']>
  gender?: Maybe<Scalars['String']>
  remainsClasses?: Maybe<Scalars['Int']>
  phone?: Maybe<Scalars['String']>
  workouts: Array<Workout>
  _workoutsMeta?: Maybe<_QueryMeta>
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>
  passwordResetIssuedAt?: Maybe<Scalars['String']>
  passwordResetRedeemedAt?: Maybe<Scalars['String']>
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']>
  magicAuthIssuedAt?: Maybe<Scalars['String']>
  magicAuthRedeemedAt?: Maybe<Scalars['String']>
}

/**  A keystone list  */
export type UserWorkoutsArgs = {
  where?: Maybe<WorkoutWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortWorkoutsBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

/**  A keystone list  */
export type User_WorkoutsMetaArgs = {
  where?: Maybe<WorkoutWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortWorkoutsBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>
  OR?: Maybe<Array<Maybe<UserWhereInput>>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  name_i?: Maybe<Scalars['String']>
  name_not_i?: Maybe<Scalars['String']>
  name_contains_i?: Maybe<Scalars['String']>
  name_not_contains_i?: Maybe<Scalars['String']>
  name_starts_with_i?: Maybe<Scalars['String']>
  name_not_starts_with_i?: Maybe<Scalars['String']>
  name_ends_with_i?: Maybe<Scalars['String']>
  name_not_ends_with_i?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  email?: Maybe<Scalars['String']>
  email_not?: Maybe<Scalars['String']>
  email_contains?: Maybe<Scalars['String']>
  email_not_contains?: Maybe<Scalars['String']>
  email_starts_with?: Maybe<Scalars['String']>
  email_not_starts_with?: Maybe<Scalars['String']>
  email_ends_with?: Maybe<Scalars['String']>
  email_not_ends_with?: Maybe<Scalars['String']>
  email_i?: Maybe<Scalars['String']>
  email_not_i?: Maybe<Scalars['String']>
  email_contains_i?: Maybe<Scalars['String']>
  email_not_contains_i?: Maybe<Scalars['String']>
  email_starts_with_i?: Maybe<Scalars['String']>
  email_not_starts_with_i?: Maybe<Scalars['String']>
  email_ends_with_i?: Maybe<Scalars['String']>
  email_not_ends_with_i?: Maybe<Scalars['String']>
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  password_is_set?: Maybe<Scalars['Boolean']>
  gender?: Maybe<Scalars['String']>
  gender_not?: Maybe<Scalars['String']>
  gender_contains?: Maybe<Scalars['String']>
  gender_not_contains?: Maybe<Scalars['String']>
  gender_starts_with?: Maybe<Scalars['String']>
  gender_not_starts_with?: Maybe<Scalars['String']>
  gender_ends_with?: Maybe<Scalars['String']>
  gender_not_ends_with?: Maybe<Scalars['String']>
  gender_i?: Maybe<Scalars['String']>
  gender_not_i?: Maybe<Scalars['String']>
  gender_contains_i?: Maybe<Scalars['String']>
  gender_not_contains_i?: Maybe<Scalars['String']>
  gender_starts_with_i?: Maybe<Scalars['String']>
  gender_not_starts_with_i?: Maybe<Scalars['String']>
  gender_ends_with_i?: Maybe<Scalars['String']>
  gender_not_ends_with_i?: Maybe<Scalars['String']>
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>
  gender_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  remainsClasses?: Maybe<Scalars['Int']>
  remainsClasses_not?: Maybe<Scalars['Int']>
  remainsClasses_lt?: Maybe<Scalars['Int']>
  remainsClasses_lte?: Maybe<Scalars['Int']>
  remainsClasses_gt?: Maybe<Scalars['Int']>
  remainsClasses_gte?: Maybe<Scalars['Int']>
  remainsClasses_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  remainsClasses_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  phone?: Maybe<Scalars['String']>
  phone_not?: Maybe<Scalars['String']>
  phone_contains?: Maybe<Scalars['String']>
  phone_not_contains?: Maybe<Scalars['String']>
  phone_starts_with?: Maybe<Scalars['String']>
  phone_not_starts_with?: Maybe<Scalars['String']>
  phone_ends_with?: Maybe<Scalars['String']>
  phone_not_ends_with?: Maybe<Scalars['String']>
  phone_i?: Maybe<Scalars['String']>
  phone_not_i?: Maybe<Scalars['String']>
  phone_contains_i?: Maybe<Scalars['String']>
  phone_not_contains_i?: Maybe<Scalars['String']>
  phone_starts_with_i?: Maybe<Scalars['String']>
  phone_not_starts_with_i?: Maybe<Scalars['String']>
  phone_ends_with_i?: Maybe<Scalars['String']>
  phone_not_ends_with_i?: Maybe<Scalars['String']>
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>
  phone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /**  condition must be true for all nodes  */
  workouts_every?: Maybe<WorkoutWhereInput>
  /**  condition must be true for at least 1 node  */
  workouts_some?: Maybe<WorkoutWhereInput>
  /**  condition must be false for all nodes  */
  workouts_none?: Maybe<WorkoutWhereInput>
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>
  passwordResetIssuedAt?: Maybe<Scalars['String']>
  passwordResetIssuedAt_not?: Maybe<Scalars['String']>
  passwordResetIssuedAt_lt?: Maybe<Scalars['String']>
  passwordResetIssuedAt_lte?: Maybe<Scalars['String']>
  passwordResetIssuedAt_gt?: Maybe<Scalars['String']>
  passwordResetIssuedAt_gte?: Maybe<Scalars['String']>
  passwordResetIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>
  passwordResetIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  passwordResetRedeemedAt?: Maybe<Scalars['String']>
  passwordResetRedeemedAt_not?: Maybe<Scalars['String']>
  passwordResetRedeemedAt_lt?: Maybe<Scalars['String']>
  passwordResetRedeemedAt_lte?: Maybe<Scalars['String']>
  passwordResetRedeemedAt_gt?: Maybe<Scalars['String']>
  passwordResetRedeemedAt_gte?: Maybe<Scalars['String']>
  passwordResetRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>
  passwordResetRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']>
  magicAuthIssuedAt?: Maybe<Scalars['String']>
  magicAuthIssuedAt_not?: Maybe<Scalars['String']>
  magicAuthIssuedAt_lt?: Maybe<Scalars['String']>
  magicAuthIssuedAt_lte?: Maybe<Scalars['String']>
  magicAuthIssuedAt_gt?: Maybe<Scalars['String']>
  magicAuthIssuedAt_gte?: Maybe<Scalars['String']>
  magicAuthIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>
  magicAuthIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  magicAuthRedeemedAt?: Maybe<Scalars['String']>
  magicAuthRedeemedAt_not?: Maybe<Scalars['String']>
  magicAuthRedeemedAt_lt?: Maybe<Scalars['String']>
  magicAuthRedeemedAt_lte?: Maybe<Scalars['String']>
  magicAuthRedeemedAt_gt?: Maybe<Scalars['String']>
  magicAuthRedeemedAt_gte?: Maybe<Scalars['String']>
  magicAuthRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>
  magicAuthRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type UserWhereUniqueInput = {
  id: Scalars['ID']
}

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  RemainsClassesAsc = 'remainsClasses_ASC',
  RemainsClassesDesc = 'remainsClasses_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  WorkoutsAsc = 'workouts_ASC',
  WorkoutsDesc = 'workouts_DESC',
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC',
  MagicAuthIssuedAtAsc = 'magicAuthIssuedAt_ASC',
  MagicAuthIssuedAtDesc = 'magicAuthIssuedAt_DESC',
  MagicAuthRedeemedAtAsc = 'magicAuthRedeemedAt_ASC',
  MagicAuthRedeemedAtDesc = 'magicAuthRedeemedAt_DESC',
}

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
  remainsClasses?: Maybe<Scalars['Int']>
  phone?: Maybe<Scalars['String']>
  workouts?: Maybe<WorkoutRelateToManyInput>
  passwordResetToken?: Maybe<Scalars['String']>
  passwordResetIssuedAt?: Maybe<Scalars['String']>
  passwordResetRedeemedAt?: Maybe<Scalars['String']>
  magicAuthToken?: Maybe<Scalars['String']>
  magicAuthIssuedAt?: Maybe<Scalars['String']>
  magicAuthRedeemedAt?: Maybe<Scalars['String']>
}

export type UsersUpdateInput = {
  id: Scalars['ID']
  data?: Maybe<UserUpdateInput>
}

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
  remainsClasses?: Maybe<Scalars['Int']>
  phone?: Maybe<Scalars['String']>
  workouts?: Maybe<WorkoutRelateToManyInput>
  passwordResetToken?: Maybe<Scalars['String']>
  passwordResetIssuedAt?: Maybe<Scalars['String']>
  passwordResetRedeemedAt?: Maybe<Scalars['String']>
  magicAuthToken?: Maybe<Scalars['String']>
  magicAuthIssuedAt?: Maybe<Scalars['String']>
  magicAuthRedeemedAt?: Maybe<Scalars['String']>
}

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>
}

/**  A keystone list  */
export type Day = {
  __typename?: 'Day'
  id: Scalars['ID']
  date?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  workouts: Array<Workout>
  _workoutsMeta?: Maybe<_QueryMeta>
}

/**  A keystone list  */
export type DayWorkoutsArgs = {
  where?: Maybe<WorkoutWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortWorkoutsBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

/**  A keystone list  */
export type Day_WorkoutsMetaArgs = {
  where?: Maybe<WorkoutWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortWorkoutsBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type DayWhereInput = {
  AND?: Maybe<Array<Maybe<DayWhereInput>>>
  OR?: Maybe<Array<Maybe<DayWhereInput>>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  date?: Maybe<Scalars['String']>
  date_not?: Maybe<Scalars['String']>
  date_lt?: Maybe<Scalars['String']>
  date_lte?: Maybe<Scalars['String']>
  date_gt?: Maybe<Scalars['String']>
  date_gte?: Maybe<Scalars['String']>
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>
  date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  status?: Maybe<Scalars['String']>
  status_not?: Maybe<Scalars['String']>
  status_contains?: Maybe<Scalars['String']>
  status_not_contains?: Maybe<Scalars['String']>
  status_starts_with?: Maybe<Scalars['String']>
  status_not_starts_with?: Maybe<Scalars['String']>
  status_ends_with?: Maybe<Scalars['String']>
  status_not_ends_with?: Maybe<Scalars['String']>
  status_i?: Maybe<Scalars['String']>
  status_not_i?: Maybe<Scalars['String']>
  status_contains_i?: Maybe<Scalars['String']>
  status_not_contains_i?: Maybe<Scalars['String']>
  status_starts_with_i?: Maybe<Scalars['String']>
  status_not_starts_with_i?: Maybe<Scalars['String']>
  status_ends_with_i?: Maybe<Scalars['String']>
  status_not_ends_with_i?: Maybe<Scalars['String']>
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /**  condition must be true for all nodes  */
  workouts_every?: Maybe<WorkoutWhereInput>
  /**  condition must be true for at least 1 node  */
  workouts_some?: Maybe<WorkoutWhereInput>
  /**  condition must be false for all nodes  */
  workouts_none?: Maybe<WorkoutWhereInput>
}

export type DayWhereUniqueInput = {
  id: Scalars['ID']
}

export enum SortDaysBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  WorkoutsAsc = 'workouts_ASC',
  WorkoutsDesc = 'workouts_DESC',
}

export type DayUpdateInput = {
  date?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  workouts?: Maybe<WorkoutRelateToManyInput>
}

export type DaysUpdateInput = {
  id: Scalars['ID']
  data?: Maybe<DayUpdateInput>
}

export type DayCreateInput = {
  date?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  workouts?: Maybe<WorkoutRelateToManyInput>
}

export type DaysCreateInput = {
  data?: Maybe<DayCreateInput>
}

export type UserRelateToManyInput = {
  create?: Maybe<Array<Maybe<UserCreateInput>>>
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>
  disconnectAll?: Maybe<Scalars['Boolean']>
}

export type DayRelateToOneInput = {
  create?: Maybe<DayCreateInput>
  connect?: Maybe<DayWhereUniqueInput>
  disconnect?: Maybe<DayWhereUniqueInput>
  disconnectAll?: Maybe<Scalars['Boolean']>
}

/**  A keystone list  */
export type Workout = {
  __typename?: 'Workout'
  id: Scalars['ID']
  date?: Maybe<Scalars['String']>
  maxParticipated?: Maybe<Scalars['Int']>
  hour?: Maybe<Scalars['String']>
  trainees: Array<User>
  _traineesMeta?: Maybe<_QueryMeta>
  day?: Maybe<Day>
  type?: Maybe<Scalars['String']>
}

/**  A keystone list  */
export type WorkoutTraineesArgs = {
  where?: Maybe<UserWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortUsersBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

/**  A keystone list  */
export type Workout_TraineesMetaArgs = {
  where?: Maybe<UserWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortUsersBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type WorkoutWhereInput = {
  AND?: Maybe<Array<Maybe<WorkoutWhereInput>>>
  OR?: Maybe<Array<Maybe<WorkoutWhereInput>>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  date?: Maybe<Scalars['String']>
  date_not?: Maybe<Scalars['String']>
  date_lt?: Maybe<Scalars['String']>
  date_lte?: Maybe<Scalars['String']>
  date_gt?: Maybe<Scalars['String']>
  date_gte?: Maybe<Scalars['String']>
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>
  date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  maxParticipated?: Maybe<Scalars['Int']>
  maxParticipated_not?: Maybe<Scalars['Int']>
  maxParticipated_lt?: Maybe<Scalars['Int']>
  maxParticipated_lte?: Maybe<Scalars['Int']>
  maxParticipated_gt?: Maybe<Scalars['Int']>
  maxParticipated_gte?: Maybe<Scalars['Int']>
  maxParticipated_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  maxParticipated_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  hour?: Maybe<Scalars['String']>
  hour_not?: Maybe<Scalars['String']>
  hour_contains?: Maybe<Scalars['String']>
  hour_not_contains?: Maybe<Scalars['String']>
  hour_starts_with?: Maybe<Scalars['String']>
  hour_not_starts_with?: Maybe<Scalars['String']>
  hour_ends_with?: Maybe<Scalars['String']>
  hour_not_ends_with?: Maybe<Scalars['String']>
  hour_i?: Maybe<Scalars['String']>
  hour_not_i?: Maybe<Scalars['String']>
  hour_contains_i?: Maybe<Scalars['String']>
  hour_not_contains_i?: Maybe<Scalars['String']>
  hour_starts_with_i?: Maybe<Scalars['String']>
  hour_not_starts_with_i?: Maybe<Scalars['String']>
  hour_ends_with_i?: Maybe<Scalars['String']>
  hour_not_ends_with_i?: Maybe<Scalars['String']>
  hour_in?: Maybe<Array<Maybe<Scalars['String']>>>
  hour_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /**  condition must be true for all nodes  */
  trainees_every?: Maybe<UserWhereInput>
  /**  condition must be true for at least 1 node  */
  trainees_some?: Maybe<UserWhereInput>
  /**  condition must be false for all nodes  */
  trainees_none?: Maybe<UserWhereInput>
  day?: Maybe<DayWhereInput>
  day_is_null?: Maybe<Scalars['Boolean']>
  type?: Maybe<Scalars['String']>
  type_not?: Maybe<Scalars['String']>
  type_contains?: Maybe<Scalars['String']>
  type_not_contains?: Maybe<Scalars['String']>
  type_starts_with?: Maybe<Scalars['String']>
  type_not_starts_with?: Maybe<Scalars['String']>
  type_ends_with?: Maybe<Scalars['String']>
  type_not_ends_with?: Maybe<Scalars['String']>
  type_i?: Maybe<Scalars['String']>
  type_not_i?: Maybe<Scalars['String']>
  type_contains_i?: Maybe<Scalars['String']>
  type_not_contains_i?: Maybe<Scalars['String']>
  type_starts_with_i?: Maybe<Scalars['String']>
  type_not_starts_with_i?: Maybe<Scalars['String']>
  type_ends_with_i?: Maybe<Scalars['String']>
  type_not_ends_with_i?: Maybe<Scalars['String']>
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type WorkoutWhereUniqueInput = {
  id: Scalars['ID']
}

export enum SortWorkoutsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  MaxParticipatedAsc = 'maxParticipated_ASC',
  MaxParticipatedDesc = 'maxParticipated_DESC',
  HourAsc = 'hour_ASC',
  HourDesc = 'hour_DESC',
  TraineesAsc = 'trainees_ASC',
  TraineesDesc = 'trainees_DESC',
  DayAsc = 'day_ASC',
  DayDesc = 'day_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export type WorkoutUpdateInput = {
  date?: Maybe<Scalars['String']>
  maxParticipated?: Maybe<Scalars['Int']>
  hour?: Maybe<Scalars['String']>
  trainees?: Maybe<UserRelateToManyInput>
  day?: Maybe<DayRelateToOneInput>
  type?: Maybe<Scalars['String']>
}

export type WorkoutsUpdateInput = {
  id: Scalars['ID']
  data?: Maybe<WorkoutUpdateInput>
}

export type WorkoutCreateInput = {
  date?: Maybe<Scalars['String']>
  maxParticipated?: Maybe<Scalars['Int']>
  hour?: Maybe<Scalars['String']>
  trainees?: Maybe<UserRelateToManyInput>
  day?: Maybe<DayRelateToOneInput>
  type?: Maybe<Scalars['String']>
}

export type WorkoutsCreateInput = {
  data?: Maybe<WorkoutCreateInput>
}

export type _ListAccess = {
  __typename?: '_ListAccess'
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>
}

export type _ListQueries = {
  __typename?: '_ListQueries'
  /** Single-item query name */
  item?: Maybe<Scalars['String']>
  /** All-items query name */
  list?: Maybe<Scalars['String']>
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>
}

export type _ListMutations = {
  __typename?: '_ListMutations'
  /** Create mutation name */
  create?: Maybe<Scalars['String']>
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>
  /** Update mutation name */
  update?: Maybe<Scalars['String']>
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>
}

export type _ListInputTypes = {
  __typename?: '_ListInputTypes'
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>
}

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields'
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>
}

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields'
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type _ListSchema = {
  __typename?: '_ListSchema'
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>
}

export type _ListSchemaFieldsArgs = {
  where?: Maybe<_ListSchemaFieldsInput>
}

export type _ListMeta = {
  __typename?: '_ListMeta'
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>
  /** The list's data path */
  path?: Maybe<Scalars['String']>
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>
}

export type _QueryMeta = {
  __typename?: '_QueryMeta'
  count?: Maybe<Scalars['Int']>
}

export type _KsListsMetaInput = {
  key?: Maybe<Scalars['String']>
  /** Whether this is an auxiliary helper list */
  auxiliary?: Maybe<Scalars['Boolean']>
}

export type _ListSchemaFieldsInput = {
  type?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>
  /**  Search for all Day items which match the where clause.  */
  allDays?: Maybe<Array<Maybe<Day>>>
  /**  Search for the Day item with the matching ID.  */
  Day?: Maybe<Day>
  /**  Perform a meta-query on all Day items which match the where clause.  */
  _allDaysMeta?: Maybe<_QueryMeta>
  /**  Retrieve the meta-data for the Day list.  */
  _DaysMeta?: Maybe<_ListMeta>
  /**  Search for all Workout items which match the where clause.  */
  allWorkouts?: Maybe<Array<Maybe<Workout>>>
  /**  Search for the Workout item with the matching ID.  */
  Workout?: Maybe<Workout>
  /**  Perform a meta-query on all Workout items which match the where clause.  */
  _allWorkoutsMeta?: Maybe<_QueryMeta>
  /**  Retrieve the meta-data for the Workout list.  */
  _WorkoutsMeta?: Maybe<_ListMeta>
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars['String']>
  authenticatedItem?: Maybe<AuthenticatedItem>
  keystone: KeystoneMeta
}

export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortUsersBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortUsersBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type QueryAllDaysArgs = {
  where?: Maybe<DayWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortDaysBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type QueryDayArgs = {
  where: DayWhereUniqueInput
}

export type Query_AllDaysMetaArgs = {
  where?: Maybe<DayWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortDaysBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type QueryAllWorkoutsArgs = {
  where?: Maybe<WorkoutWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortWorkoutsBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type QueryWorkoutArgs = {
  where: WorkoutWhereUniqueInput
}

export type Query_AllWorkoutsMetaArgs = {
  where?: Maybe<WorkoutWhereInput>
  search?: Maybe<Scalars['String']>
  sortBy?: Maybe<Array<SortWorkoutsBy>>
  orderBy?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type Query_KsListsMetaArgs = {
  where?: Maybe<_KsListsMetaInput>
}

export type Mutation = {
  __typename?: 'Mutation'
  /**  Create a single User item.  */
  createUser?: Maybe<User>
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>
  /**  Create a single Day item.  */
  createDay?: Maybe<Day>
  /**  Create multiple Day items.  */
  createDays?: Maybe<Array<Maybe<Day>>>
  /**  Update a single Day item by ID.  */
  updateDay?: Maybe<Day>
  /**  Update multiple Day items by ID.  */
  updateDays?: Maybe<Array<Maybe<Day>>>
  /**  Delete a single Day item by ID.  */
  deleteDay?: Maybe<Day>
  /**  Delete multiple Day items by ID.  */
  deleteDays?: Maybe<Array<Maybe<Day>>>
  /**  Create a single Workout item.  */
  createWorkout?: Maybe<Workout>
  /**  Create multiple Workout items.  */
  createWorkouts?: Maybe<Array<Maybe<Workout>>>
  /**  Update a single Workout item by ID.  */
  updateWorkout?: Maybe<Workout>
  /**  Update multiple Workout items by ID.  */
  updateWorkouts?: Maybe<Array<Maybe<Workout>>>
  /**  Delete a single Workout item by ID.  */
  deleteWorkout?: Maybe<Workout>
  /**  Delete multiple Workout items by ID.  */
  deleteWorkouts?: Maybe<Array<Maybe<Workout>>>
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult
  createInitialUser: UserAuthenticationWithPasswordSuccess
  endSession: Scalars['Boolean']
}

export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>
}

export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>
}

export type MutationUpdateUserArgs = {
  id: Scalars['ID']
  data?: Maybe<UserUpdateInput>
}

export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>
}

export type MutationDeleteUserArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
}

export type MutationCreateDayArgs = {
  data?: Maybe<DayCreateInput>
}

export type MutationCreateDaysArgs = {
  data?: Maybe<Array<Maybe<DaysCreateInput>>>
}

export type MutationUpdateDayArgs = {
  id: Scalars['ID']
  data?: Maybe<DayUpdateInput>
}

export type MutationUpdateDaysArgs = {
  data?: Maybe<Array<Maybe<DaysUpdateInput>>>
}

export type MutationDeleteDayArgs = {
  id: Scalars['ID']
}

export type MutationDeleteDaysArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
}

export type MutationCreateWorkoutArgs = {
  data?: Maybe<WorkoutCreateInput>
}

export type MutationCreateWorkoutsArgs = {
  data?: Maybe<Array<Maybe<WorkoutsCreateInput>>>
}

export type MutationUpdateWorkoutArgs = {
  id: Scalars['ID']
  data?: Maybe<WorkoutUpdateInput>
}

export type MutationUpdateWorkoutsArgs = {
  data?: Maybe<Array<Maybe<WorkoutsUpdateInput>>>
}

export type MutationDeleteWorkoutArgs = {
  id: Scalars['ID']
}

export type MutationDeleteWorkoutsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
}

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput
}

export type AuthenticatedItem = User

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordSuccess
  | UserAuthenticationWithPasswordFailure

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess'
  sessionToken: Scalars['String']
  item: User
}

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure'
  code: PasswordAuthErrorCode
  message: Scalars['String']
}

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH',
}

export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta'
  adminMeta: KeystoneAdminMeta
}

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta'
  enableSignout: Scalars['Boolean']
  enableSessionItem: Scalars['Boolean']
  lists: Array<KeystoneAdminUiListMeta>
  list?: Maybe<KeystoneAdminUiListMeta>
}

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta'
  key: Scalars['String']
  itemQueryName: Scalars['String']
  listQueryName: Scalars['String']
  hideCreate: Scalars['Boolean']
  hideDelete: Scalars['Boolean']
  path: Scalars['String']
  label: Scalars['String']
  singular: Scalars['String']
  plural: Scalars['String']
  description?: Maybe<Scalars['String']>
  initialColumns: Array<Scalars['String']>
  pageSize: Scalars['Int']
  labelField: Scalars['String']
  fields: Array<KeystoneAdminUiFieldMeta>
  initialSort?: Maybe<KeystoneAdminUiSort>
  isHidden: Scalars['Boolean']
}

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort'
  field: Scalars['String']
  direction: KeystoneAdminUiSortDirection
}

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta'
  path: Scalars['String']
  label: Scalars['String']
  isOrderable: Scalars['Boolean']
  fieldMeta?: Maybe<Scalars['JSON']>
  viewsHash: Scalars['String']
  customViewsHash?: Maybe<Scalars['String']>
  createView: KeystoneAdminUiFieldMetaCreateView
  listView: KeystoneAdminUiFieldMetaListView
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>
}

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID']
}

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView'
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView'
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView'
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode
}

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden',
}

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden',
}

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}
