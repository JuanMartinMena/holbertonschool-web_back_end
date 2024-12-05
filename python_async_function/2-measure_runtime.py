#!/usr/bin/env python3
"""
The objective is to return the average time of execution of all the time calling
"""
import asyncio
import time
from typing import Union
import importlib
wait_n = importlib.import_module('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for calling wait_n(n, max_delay)
    and returns the average time per coroutine.
    """
    start_time = time.perf_counter()  # Record start time
    asyncio.run(wait_n(n, max_delay))  # Run wait_n coroutine
    end_time = time.perf_counter()  # Record end time

    total_time = end_time - start_time  # Calculate elapsed time
    return total_time / n  # Return average time per coroutine
