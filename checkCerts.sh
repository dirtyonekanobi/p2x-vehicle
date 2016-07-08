#!/bin/bash
exec curl -XGET -vvvv --cert $SCMSCERT --key $SCMSKEY $SCMS/helloTest
