#!/bin/bash

# IMPORTANT! You must have cloned the target repositories locally before running this script.

rm -f ./reports/orbiter-not-mapped-props.json

npx codemod -s ./ -t ../ShareGate.Protect.Web -a ./reports/orbiter-not-mapped-props.json -n 1 --no-interactive --filter-unmapped props
npx codemod -s ./ -t ../ShareGate.One -a ./reports/orbiter-not-mapped-props.json -n 1 --no-interactive --filter-unmapped props

npx codemod -s ./ -t ../workleap-performance-app -a ./reports/orbiter-not-mapped-props.json -n 1 --no-interactive --filter-unmapped props

npx codemod -s ./ -t ../workleap-management-app -a ./reports/orbiter-not-mapped-props.json -n 1 --no-interactive --filter-unmapped props
npx codemod -s ./ -t ../workleap-management-shell -a ./reports/orbiter-not-mapped-props.json -n 1 --no-interactive --filter-unmapped props
npx codemod -s ./ -t ../workleap-administration-portal -a ./reports/orbiter-not-mapped-props.json -n 1 --no-interactive --filter-unmapped props
npx codemod -s ./ -t ../workleap-activation-app -a ./reports/orbiter-not-mapped-props.json -n 1 --no-interactive --filter-unmapped props
npx codemod -s ./ -t ../workleap-login-app -a ./reports/orbiter-not-mapped-props.json -n 1 --no-interactive --filter-unmapped props

npx codemod -s ./ -t ../workleap-ai-app -a ./reports/orbiter-not-mapped-props.json -n 1 --no-interactive --filter-unmapped props

echo "✅ Analysis complete! Check ./reports/orbiter-not-mapped-props.json for results."
