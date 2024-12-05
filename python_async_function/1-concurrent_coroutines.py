#!/usr/bin/env python3
"""
The objetive is to create a function that calls wait_random n times and return a list
with the delay times in ascending order
"""
import asyncio
from typing import List
from 0_basic_async_syntax import wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified max_delay and returns
    a list of all the delays in ascending order.
    """
    delays = []
    tasks = [wait_random(max_delay) for _ in range(n)]  # Spawn all tasks at once

    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task
        delays.append(delay)

    return delays
