#!/usr/bin/env python3
"""
Este módulo define un generador
asíncrono que produce números aleatorios.
"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Generador asíncrono que produce
    10 números aleatorios entre 0 y 10,
    con una espera asíncrona de
    1 segundo entre cada generación.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
