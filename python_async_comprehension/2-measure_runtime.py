#!/usr/bin/env python3
"""
asyncio.gather and time comprehension
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

    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = time.time()

    return end_time - start_time
