#!/bin/bash

source ${ENV_FILE:-.env}
npx ponder start --port $PORT --schema $DATABASE_SCHEMA
