#!/usr/bin/env python3
"""Module to insert a new document in a MongoDB collection"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a collection based on kwargs.
    """
    if not mongo_collection:
        return None

    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
