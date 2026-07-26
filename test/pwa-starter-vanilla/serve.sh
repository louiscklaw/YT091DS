#!/usr/bin/env bash

set -ex

npx live-server . --host=0.0.0.0 --mount=/manifest.json:manifest.json
