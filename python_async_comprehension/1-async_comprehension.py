#!/usr/bin/env python3
"""Ejemplo de comprensión asíncrona"""
from typing import List
import importlib
async_generator = importlib.import_module('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Recopila 10 números aleatorios usando async_generator mediante
    una comprensión asíncrona y los devuelve como una lista.
    """
    return [num async for num in async_generator()]
