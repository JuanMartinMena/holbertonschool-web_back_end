#!/usr/bin/env python3
"""
asyncio.gather and time comprehension using a loop
"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Ejecuta async_comprehension 4 veces en paralelo utilizando asyncio.gather.
    Mide el tiempo total que tarda en ejecutarse.
    """
    start_time = time.time()

    tasks = [async_comprehension() for _ in range(4)]

    await asyncio.gather(*tasks)

    end_time = time.time()

    return end_time - start_time
