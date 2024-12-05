#!/usr/bin/env python3
"""
Module for creating asyncio tasks.
"""
import asyncio
import importlib
wait_random = importlib.import_module('python_async_function.0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Returns an asyncio.Task that will run wait_random(max_delay).
    """
    return asyncio.create_task(wait_random(max_delay))
