/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as ContextmModule from "./nexus/context"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  DateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: Array<NexusGenScalars['DateTime'] | null> | null; // [DateTime]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: Array<NexusGenScalars['DateTime'] | null> | null; // [DateTime]
  }
  IntFieldUpdateOperationsInput: { // input type
    set?: number | null; // Int
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: Array<number | null> | null; // [Int]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: Array<number | null> | null; // [Int]
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: Array<NexusGenScalars['DateTime'] | null> | null; // [DateTime]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: Array<NexusGenScalars['DateTime'] | null> | null; // [DateTime]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: Array<number | null> | null; // [Int]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: Array<number | null> | null; // [Int]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: Array<string | null> | null; // [String]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: Array<string | null> | null; // [String]
    startsWith?: string | null; // String
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: Array<string | null> | null; // [String]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: Array<string | null> | null; // [String]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    left?: number | null; // Int
    Workout?: NexusGenInputs['WorkoutCreateManyWithoutTraineesInput'] | null; // WorkoutCreateManyWithoutTraineesInput
  }
  UserCreateManyWithoutWorkoutInput: { // input type
    connect?: Array<NexusGenInputs['UserWhereUniqueInput'] | null> | null; // [UserWhereUniqueInput]
    create?: Array<NexusGenInputs['UserCreateWithoutWorkoutInput'] | null> | null; // [UserCreateWithoutWorkoutInput]
  }
  UserCreateWithoutWorkoutInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    left?: number | null; // Int
  }
  UserListRelationFilter: { // input type
    every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserScalarWhereInput: { // input type
    AND?: Array<NexusGenInputs['UserScalarWhereInput'] | null> | null; // [UserScalarWhereInput]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    firstName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    lastName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    left?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: Array<NexusGenInputs['UserScalarWhereInput'] | null> | null; // [UserScalarWhereInput]
    OR?: Array<NexusGenInputs['UserScalarWhereInput'] | null> | null; // [UserScalarWhereInput]
  }
  UserUpdateInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    firstName?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    lastName?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    left?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    Workout?: NexusGenInputs['WorkoutUpdateManyWithoutTraineesInput'] | null; // WorkoutUpdateManyWithoutTraineesInput
  }
  UserUpdateManyDataInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    firstName?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    lastName?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    left?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
  }
  UserUpdateManyMutationInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    firstName?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    lastName?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    left?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
  }
  UserUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['UserUpdateManyDataInput']; // UserUpdateManyDataInput!
    where: NexusGenInputs['UserScalarWhereInput']; // UserScalarWhereInput!
  }
  UserUpdateManyWithoutWorkoutInput: { // input type
    connect?: Array<NexusGenInputs['UserWhereUniqueInput'] | null> | null; // [UserWhereUniqueInput]
    create?: Array<NexusGenInputs['UserCreateWithoutWorkoutInput'] | null> | null; // [UserCreateWithoutWorkoutInput]
    delete?: Array<NexusGenInputs['UserWhereUniqueInput'] | null> | null; // [UserWhereUniqueInput]
    deleteMany?: Array<NexusGenInputs['UserScalarWhereInput'] | null> | null; // [UserScalarWhereInput]
    disconnect?: Array<NexusGenInputs['UserWhereUniqueInput'] | null> | null; // [UserWhereUniqueInput]
    set?: Array<NexusGenInputs['UserWhereUniqueInput'] | null> | null; // [UserWhereUniqueInput]
    update?: Array<NexusGenInputs['UserUpdateWithWhereUniqueWithoutWorkoutInput'] | null> | null; // [UserUpdateWithWhereUniqueWithoutWorkoutInput]
    updateMany?: Array<NexusGenInputs['UserUpdateManyWithWhereNestedInput'] | null> | null; // [UserUpdateManyWithWhereNestedInput]
    upsert?: Array<NexusGenInputs['UserUpsertWithWhereUniqueWithoutWorkoutInput'] | null> | null; // [UserUpsertWithWhereUniqueWithoutWorkoutInput]
  }
  UserUpdateWithWhereUniqueWithoutWorkoutInput: { // input type
    data: NexusGenInputs['UserUpdateWithoutWorkoutDataInput']; // UserUpdateWithoutWorkoutDataInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserUpdateWithoutWorkoutDataInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    firstName?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    lastName?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    left?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
  }
  UserUpsertWithWhereUniqueWithoutWorkoutInput: { // input type
    create: NexusGenInputs['UserCreateWithoutWorkoutInput']; // UserCreateWithoutWorkoutInput!
    update: NexusGenInputs['UserUpdateWithoutWorkoutDataInput']; // UserUpdateWithoutWorkoutDataInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserWhereInput: { // input type
    AND?: Array<NexusGenInputs['UserWhereInput'] | null> | null; // [UserWhereInput]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    firstName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    lastName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    left?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: Array<NexusGenInputs['UserWhereInput'] | null> | null; // [UserWhereInput]
    OR?: Array<NexusGenInputs['UserWhereInput'] | null> | null; // [UserWhereInput]
    Workout?: NexusGenInputs['WorkoutListRelationFilter'] | null; // WorkoutListRelationFilter
  }
  UserWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  WorkoutCreateInput: { // input type
    date: string; // String!
    status: NexusGenEnums['WorkoutStatus']; // WorkoutStatus!
    time: string; // String!
    trainees?: NexusGenInputs['UserCreateManyWithoutWorkoutInput'] | null; // UserCreateManyWithoutWorkoutInput
    type: NexusGenEnums['WorkoutType']; // WorkoutType!
  }
  WorkoutCreateManyWithoutTraineesInput: { // input type
    connect?: Array<NexusGenInputs['WorkoutWhereUniqueInput'] | null> | null; // [WorkoutWhereUniqueInput]
    create?: Array<NexusGenInputs['WorkoutCreateWithoutTraineesInput'] | null> | null; // [WorkoutCreateWithoutTraineesInput]
  }
  WorkoutCreateWithoutTraineesInput: { // input type
    date: string; // String!
    status: NexusGenEnums['WorkoutStatus']; // WorkoutStatus!
    time: string; // String!
    type: NexusGenEnums['WorkoutType']; // WorkoutType!
  }
  WorkoutListRelationFilter: { // input type
    every?: NexusGenInputs['WorkoutWhereInput'] | null; // WorkoutWhereInput
    none?: NexusGenInputs['WorkoutWhereInput'] | null; // WorkoutWhereInput
    some?: NexusGenInputs['WorkoutWhereInput'] | null; // WorkoutWhereInput
  }
  WorkoutOrderByInput: { // input type
    date?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    status?: NexusGenEnums['SortOrder'] | null; // SortOrder
    time?: NexusGenEnums['SortOrder'] | null; // SortOrder
    type?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  WorkoutScalarWhereInput: { // input type
    AND?: Array<NexusGenInputs['WorkoutScalarWhereInput'] | null> | null; // [WorkoutScalarWhereInput]
    date?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: Array<NexusGenInputs['WorkoutScalarWhereInput'] | null> | null; // [WorkoutScalarWhereInput]
    OR?: Array<NexusGenInputs['WorkoutScalarWhereInput'] | null> | null; // [WorkoutScalarWhereInput]
    status?: NexusGenEnums['WorkoutStatus'] | null; // WorkoutStatus
    time?: NexusGenInputs['StringFilter'] | null; // StringFilter
    type?: NexusGenEnums['WorkoutType'] | null; // WorkoutType
  }
  WorkoutUpdateInput: { // input type
    date?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    status?: NexusGenEnums['WorkoutStatus'] | null; // WorkoutStatus
    time?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    trainees?: NexusGenInputs['UserUpdateManyWithoutWorkoutInput'] | null; // UserUpdateManyWithoutWorkoutInput
    type?: NexusGenEnums['WorkoutType'] | null; // WorkoutType
  }
  WorkoutUpdateManyDataInput: { // input type
    date?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    status?: NexusGenEnums['WorkoutStatus'] | null; // WorkoutStatus
    time?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    type?: NexusGenEnums['WorkoutType'] | null; // WorkoutType
  }
  WorkoutUpdateManyMutationInput: { // input type
    date?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    status?: NexusGenEnums['WorkoutStatus'] | null; // WorkoutStatus
    time?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    type?: NexusGenEnums['WorkoutType'] | null; // WorkoutType
  }
  WorkoutUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['WorkoutUpdateManyDataInput']; // WorkoutUpdateManyDataInput!
    where: NexusGenInputs['WorkoutScalarWhereInput']; // WorkoutScalarWhereInput!
  }
  WorkoutUpdateManyWithoutTraineesInput: { // input type
    connect?: Array<NexusGenInputs['WorkoutWhereUniqueInput'] | null> | null; // [WorkoutWhereUniqueInput]
    create?: Array<NexusGenInputs['WorkoutCreateWithoutTraineesInput'] | null> | null; // [WorkoutCreateWithoutTraineesInput]
    delete?: Array<NexusGenInputs['WorkoutWhereUniqueInput'] | null> | null; // [WorkoutWhereUniqueInput]
    deleteMany?: Array<NexusGenInputs['WorkoutScalarWhereInput'] | null> | null; // [WorkoutScalarWhereInput]
    disconnect?: Array<NexusGenInputs['WorkoutWhereUniqueInput'] | null> | null; // [WorkoutWhereUniqueInput]
    set?: Array<NexusGenInputs['WorkoutWhereUniqueInput'] | null> | null; // [WorkoutWhereUniqueInput]
    update?: Array<NexusGenInputs['WorkoutUpdateWithWhereUniqueWithoutTraineesInput'] | null> | null; // [WorkoutUpdateWithWhereUniqueWithoutTraineesInput]
    updateMany?: Array<NexusGenInputs['WorkoutUpdateManyWithWhereNestedInput'] | null> | null; // [WorkoutUpdateManyWithWhereNestedInput]
    upsert?: Array<NexusGenInputs['WorkoutUpsertWithWhereUniqueWithoutTraineesInput'] | null> | null; // [WorkoutUpsertWithWhereUniqueWithoutTraineesInput]
  }
  WorkoutUpdateWithWhereUniqueWithoutTraineesInput: { // input type
    data: NexusGenInputs['WorkoutUpdateWithoutTraineesDataInput']; // WorkoutUpdateWithoutTraineesDataInput!
    where: NexusGenInputs['WorkoutWhereUniqueInput']; // WorkoutWhereUniqueInput!
  }
  WorkoutUpdateWithoutTraineesDataInput: { // input type
    date?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    status?: NexusGenEnums['WorkoutStatus'] | null; // WorkoutStatus
    time?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    type?: NexusGenEnums['WorkoutType'] | null; // WorkoutType
  }
  WorkoutUpsertWithWhereUniqueWithoutTraineesInput: { // input type
    create: NexusGenInputs['WorkoutCreateWithoutTraineesInput']; // WorkoutCreateWithoutTraineesInput!
    update: NexusGenInputs['WorkoutUpdateWithoutTraineesDataInput']; // WorkoutUpdateWithoutTraineesDataInput!
    where: NexusGenInputs['WorkoutWhereUniqueInput']; // WorkoutWhereUniqueInput!
  }
  WorkoutWhereInput: { // input type
    AND?: Array<NexusGenInputs['WorkoutWhereInput'] | null> | null; // [WorkoutWhereInput]
    date?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: Array<NexusGenInputs['WorkoutWhereInput'] | null> | null; // [WorkoutWhereInput]
    OR?: Array<NexusGenInputs['WorkoutWhereInput'] | null> | null; // [WorkoutWhereInput]
    status?: NexusGenEnums['WorkoutStatus'] | null; // WorkoutStatus
    time?: NexusGenInputs['StringFilter'] | null; // StringFilter
    trainees?: NexusGenInputs['UserListRelationFilter'] | null; // UserListRelationFilter
    type?: NexusGenEnums['WorkoutType'] | null; // WorkoutType
  }
  WorkoutWhereUniqueInput: { // input type
    id?: number | null; // Int
    Workout_date_time_unique?: NexusGenInputs['Workout_date_time_uniqueCompoundUniqueInput'] | null; // Workout_date_time_uniqueCompoundUniqueInput
  }
  Workout_date_time_uniqueCompoundUniqueInput: { // input type
    date: string; // String!
    time: string; // String!
  }
}

export interface NexusGenEnums {
  SortOrder: "asc" | "desc"
  WorkoutStatus: "Active" | "Cancelled" | "Over"
  WorkoutType: "PERSONAL" | "TEAM"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenRootTypes {
  BatchPayload: { // root type
    count: number; // Int!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    firstName: string; // String!
    id: number; // Int!
    lastName: string; // String!
    left: number; // Int!
  }
  Workout: { // root type
    date: string; // String!
    id: number; // Int!
    status: NexusGenEnums['WorkoutStatus']; // WorkoutStatus!
    time: string; // String!
    type: NexusGenEnums['WorkoutType']; // WorkoutType!
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  DateTimeFieldUpdateOperationsInput: NexusGenInputs['DateTimeFieldUpdateOperationsInput'];
  DateTimeFilter: NexusGenInputs['DateTimeFilter'];
  IntFieldUpdateOperationsInput: NexusGenInputs['IntFieldUpdateOperationsInput'];
  IntFilter: NexusGenInputs['IntFilter'];
  NestedDateTimeFilter: NexusGenInputs['NestedDateTimeFilter'];
  NestedIntFilter: NexusGenInputs['NestedIntFilter'];
  NestedStringFilter: NexusGenInputs['NestedStringFilter'];
  StringFieldUpdateOperationsInput: NexusGenInputs['StringFieldUpdateOperationsInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCreateManyWithoutWorkoutInput: NexusGenInputs['UserCreateManyWithoutWorkoutInput'];
  UserCreateWithoutWorkoutInput: NexusGenInputs['UserCreateWithoutWorkoutInput'];
  UserListRelationFilter: NexusGenInputs['UserListRelationFilter'];
  UserScalarWhereInput: NexusGenInputs['UserScalarWhereInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserUpdateManyDataInput: NexusGenInputs['UserUpdateManyDataInput'];
  UserUpdateManyMutationInput: NexusGenInputs['UserUpdateManyMutationInput'];
  UserUpdateManyWithWhereNestedInput: NexusGenInputs['UserUpdateManyWithWhereNestedInput'];
  UserUpdateManyWithoutWorkoutInput: NexusGenInputs['UserUpdateManyWithoutWorkoutInput'];
  UserUpdateWithWhereUniqueWithoutWorkoutInput: NexusGenInputs['UserUpdateWithWhereUniqueWithoutWorkoutInput'];
  UserUpdateWithoutWorkoutDataInput: NexusGenInputs['UserUpdateWithoutWorkoutDataInput'];
  UserUpsertWithWhereUniqueWithoutWorkoutInput: NexusGenInputs['UserUpsertWithWhereUniqueWithoutWorkoutInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  WorkoutCreateInput: NexusGenInputs['WorkoutCreateInput'];
  WorkoutCreateManyWithoutTraineesInput: NexusGenInputs['WorkoutCreateManyWithoutTraineesInput'];
  WorkoutCreateWithoutTraineesInput: NexusGenInputs['WorkoutCreateWithoutTraineesInput'];
  WorkoutListRelationFilter: NexusGenInputs['WorkoutListRelationFilter'];
  WorkoutOrderByInput: NexusGenInputs['WorkoutOrderByInput'];
  WorkoutScalarWhereInput: NexusGenInputs['WorkoutScalarWhereInput'];
  WorkoutUpdateInput: NexusGenInputs['WorkoutUpdateInput'];
  WorkoutUpdateManyDataInput: NexusGenInputs['WorkoutUpdateManyDataInput'];
  WorkoutUpdateManyMutationInput: NexusGenInputs['WorkoutUpdateManyMutationInput'];
  WorkoutUpdateManyWithWhereNestedInput: NexusGenInputs['WorkoutUpdateManyWithWhereNestedInput'];
  WorkoutUpdateManyWithoutTraineesInput: NexusGenInputs['WorkoutUpdateManyWithoutTraineesInput'];
  WorkoutUpdateWithWhereUniqueWithoutTraineesInput: NexusGenInputs['WorkoutUpdateWithWhereUniqueWithoutTraineesInput'];
  WorkoutUpdateWithoutTraineesDataInput: NexusGenInputs['WorkoutUpdateWithoutTraineesDataInput'];
  WorkoutUpsertWithWhereUniqueWithoutTraineesInput: NexusGenInputs['WorkoutUpsertWithWhereUniqueWithoutTraineesInput'];
  WorkoutWhereInput: NexusGenInputs['WorkoutWhereInput'];
  WorkoutWhereUniqueInput: NexusGenInputs['WorkoutWhereUniqueInput'];
  Workout_date_time_uniqueCompoundUniqueInput: NexusGenInputs['Workout_date_time_uniqueCompoundUniqueInput'];
  SortOrder: NexusGenEnums['SortOrder'];
  WorkoutStatus: NexusGenEnums['WorkoutStatus'];
  WorkoutType: NexusGenEnums['WorkoutType'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  DateTime: NexusGenScalars['DateTime'];
}

export interface NexusGenFieldTypes {
  BatchPayload: { // field return type
    count: number; // Int!
  }
  Mutation: { // field return type
    bookWorkout: NexusGenRootTypes['Workout'] | null; // Workout
    createOneUser: NexusGenRootTypes['User']; // User!
    createOneWorkout: NexusGenRootTypes['Workout']; // Workout!
    updateManyUser: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateManyWorkout: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateOneUser: NexusGenRootTypes['User'] | null; // User
    updateOneWorkout: NexusGenRootTypes['Workout'] | null; // Workout
  }
  Query: { // field return type
    todayWorkouts: Array<NexusGenRootTypes['Workout'] | null> | null; // [Workout]
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
    workout: NexusGenRootTypes['Workout'] | null; // Workout
    workouts: NexusGenRootTypes['Workout'][]; // [Workout!]!
    workoutsPerWeek: Array<NexusGenRootTypes['Workout'] | null> | null; // [Workout]
  }
  User: { // field return type
    email: string; // String!
    firstName: string; // String!
    id: number; // Int!
    lastName: string; // String!
    left: number; // Int!
  }
  Workout: { // field return type
    date: string; // String!
    id: number; // Int!
    status: NexusGenEnums['WorkoutStatus']; // WorkoutStatus!
    time: string; // String!
    trainees: NexusGenRootTypes['User'][]; // [User!]!
    type: NexusGenEnums['WorkoutType']; // WorkoutType!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    bookWorkout: { // args
      traineeId: number; // Int!
      workoutId: number; // Int!
    }
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    createOneWorkout: { // args
      data: NexusGenInputs['WorkoutCreateInput']; // WorkoutCreateInput!
    }
    updateManyUser: { // args
      data: NexusGenInputs['UserUpdateManyMutationInput']; // UserUpdateManyMutationInput!
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    updateManyWorkout: { // args
      data: NexusGenInputs['WorkoutUpdateManyMutationInput']; // WorkoutUpdateManyMutationInput!
      where?: NexusGenInputs['WorkoutWhereInput'] | null; // WorkoutWhereInput
    }
    updateOneUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    updateOneWorkout: { // args
      data: NexusGenInputs['WorkoutUpdateInput']; // WorkoutUpdateInput!
      where: NexusGenInputs['WorkoutWhereUniqueInput']; // WorkoutWhereUniqueInput!
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    workout: { // args
      where: NexusGenInputs['WorkoutWhereUniqueInput']; // WorkoutWhereUniqueInput!
    }
    workouts: { // args
      after?: NexusGenInputs['WorkoutWhereUniqueInput'] | null; // WorkoutWhereUniqueInput
      before?: NexusGenInputs['WorkoutWhereUniqueInput'] | null; // WorkoutWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: Array<NexusGenInputs['WorkoutOrderByInput'] | null> | null; // [WorkoutOrderByInput]
      where?: NexusGenInputs['WorkoutWhereInput'] | null; // WorkoutWhereInput
    }
  }
  Workout: {
    trainees: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BatchPayload" | "Mutation" | "Query" | "User" | "Workout";

export type NexusGenInputNames = "DateTimeFieldUpdateOperationsInput" | "DateTimeFilter" | "IntFieldUpdateOperationsInput" | "IntFilter" | "NestedDateTimeFilter" | "NestedIntFilter" | "NestedStringFilter" | "StringFieldUpdateOperationsInput" | "StringFilter" | "UserCreateInput" | "UserCreateManyWithoutWorkoutInput" | "UserCreateWithoutWorkoutInput" | "UserListRelationFilter" | "UserScalarWhereInput" | "UserUpdateInput" | "UserUpdateManyDataInput" | "UserUpdateManyMutationInput" | "UserUpdateManyWithWhereNestedInput" | "UserUpdateManyWithoutWorkoutInput" | "UserUpdateWithWhereUniqueWithoutWorkoutInput" | "UserUpdateWithoutWorkoutDataInput" | "UserUpsertWithWhereUniqueWithoutWorkoutInput" | "UserWhereInput" | "UserWhereUniqueInput" | "WorkoutCreateInput" | "WorkoutCreateManyWithoutTraineesInput" | "WorkoutCreateWithoutTraineesInput" | "WorkoutListRelationFilter" | "WorkoutOrderByInput" | "WorkoutScalarWhereInput" | "WorkoutUpdateInput" | "WorkoutUpdateManyDataInput" | "WorkoutUpdateManyMutationInput" | "WorkoutUpdateManyWithWhereNestedInput" | "WorkoutUpdateManyWithoutTraineesInput" | "WorkoutUpdateWithWhereUniqueWithoutTraineesInput" | "WorkoutUpdateWithoutTraineesDataInput" | "WorkoutUpsertWithWhereUniqueWithoutTraineesInput" | "WorkoutWhereInput" | "WorkoutWhereUniqueInput" | "Workout_date_time_uniqueCompoundUniqueInput";

export type NexusGenEnumNames = "SortOrder" | "WorkoutStatus" | "WorkoutType";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ContextmModule.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}