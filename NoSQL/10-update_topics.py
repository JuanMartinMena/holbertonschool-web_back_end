#!/usr/bin/env python3
"""
Module to update topics of a school document in a MongoDB collection.
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name.
    """
    if mongo_collection is None:
        raise ValueError("mongo_collection cannot be None")
    if not isinstance(name, str):
        raise ValueError("name must be a string")
    if not isinstance(topics, list):
        raise ValueError("topics must be a list")

    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
