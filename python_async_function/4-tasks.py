#!/usr/bin/env python3
"""
Module for executing multiple tasks concurrently.
"""
import asyncio
import importlib
task_wait_random = importlib.import_module('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> list:
    """
    Spawns task_wait_random n times with the specified max_delay.
    Returns the list of all delays in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return sorted(delays)
