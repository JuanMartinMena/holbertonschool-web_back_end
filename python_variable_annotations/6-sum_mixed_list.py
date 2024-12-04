#!/usr/bin/env python3
"""
This module defines a type-annotated function to sum a list containing integers and floats.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Esta funcion suma una lista de int y float
    """
    return sum(mxd_lst)
