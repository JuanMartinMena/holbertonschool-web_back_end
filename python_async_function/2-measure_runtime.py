#!/usr/bin/env python3
"""
The objetive is tu return the average tiem of execution of all the time calling
"""
import asyncio
import time
from typing import Union
from 1_concurrent_coroutines import wait_n


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
