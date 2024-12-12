#!/usr/bin/env python3
import random
import time
from typing import Generator

def async_generator() -> Generator[float, None, None]:
    for _ in range(10):
        time.sleep(1)
        yield random.uniform(0, 10)
