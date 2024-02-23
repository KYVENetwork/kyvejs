#!/bin/sh

#########################################
#               Variables               #
#########################################
# CHANGE THESE TO MATCH YOUR INTEGRATION!!!
URL=https://rpc.kyve.network                          # The URL to fetch data from
INITIAL_VALUE=4943400                                 # The initial value to start from for each endpoint
INCREMENT=1                                           # How much to increase the value by
ITERATIONS=10                                         # How many files to fetch for each endpoint
ENDPOINTS="/block?height /block_results?height"       # The endpoints to fetch data from

#########################################

OUTPUT_DIR="testdata/api"

# Loop over each endpoint
for endpoint in $ENDPOINTS
do
    # Reset the value for each endpoint
    value=$INITIAL_VALUE

    # Check if the endpoint contains a query parameter
    if echo "$endpoint" | grep -q "?" ; then
        echo "Query parameter found"
        split=$(echo $endpoint | tr "?" "\n")
        query_param_name=$(echo $split | cut -d' ' -f2)
        directory=$(echo $split | cut -d' ' -f1)
    else
        query_param_name=""
        directory=$endpoint
    fi

    # Loop for the specified number of ITERATIONS
    i=0
    while [ $i -lt $ITERATIONS ]
    do
        # Create the necessary directories if they do not exist
        mkdir -p "${OUTPUT_DIR}/${directory}"

        # Make the curl request and save the response to a JSON file
        if [ -n "$query_param_name" ]; then
            curl "$URL${endpoint}=$value" -o "${OUTPUT_DIR}/${directory}/?${query_param_name}=${value}.json"
        else
            curl "$URL${endpoint}/$value" -o "${OUTPUT_DIR}/${directory}/${value}.json"
        fi

        # Increase the value by the INCREMENT
        value=$((value + INCREMENT))
        i=$((i + 1))
    done
done
