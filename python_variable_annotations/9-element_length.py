#!/usr/bin/env python3
"""
This module defines a function element_length with type annotations.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return a list of tuples containing each
    element of the input iterable and its length.
    """
    return [(i, len(i)) for i in lst]
