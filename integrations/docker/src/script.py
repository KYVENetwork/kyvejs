import argparse
import json

# set up parent parsers
parent_parser = argparse.ArgumentParser(add_help=False)
main_parser = argparse.ArgumentParser()
subparsers = main_parser.add_subparsers(title="commands", dest="command")

# read
read_parser = subparsers.add_parser("read", help="reads the source and outputs messages to STDOUT",
                                    parents=[parent_parser])

read_parser.add_argument("key", type=int)

parsed_args = main_parser.parse_args()

if parsed_args.command == "read":
    my_dict = {"some_data": parsed_args.key}
    print(json.dumps(my_dict))
else:
    raise Exception("Command not found")
