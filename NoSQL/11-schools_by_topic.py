#!/usr/bin/env python3
"""
Module to find schools by a specific topic in a MongoDB collection.
Provides a function to query schools that teach a particular topic.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic.
    """
    if mongo_collection is None:
        raise ValueError("mongo_collection cannot be None")
    if not isinstance(topic, str):
        raise ValueError("topic must be a string")

    return list(mongo_collection.find({"topics": topic}))
