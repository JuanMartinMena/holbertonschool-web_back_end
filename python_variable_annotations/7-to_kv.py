#!/usr/bin/env python3
"""
This module defines a type-annotated function to_kv.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    funcion que devuelve la tupla con el str k y el cuadrado del int/float v 
    """
    return (k, float(v ** 2))
