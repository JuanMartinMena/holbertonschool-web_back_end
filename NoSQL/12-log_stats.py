#!/usr/bin/env python3
"""
Provides statistics about Nginx logs stored in a MongoDB collection.
"""

from pymongo import MongoClient

def log_stats():
    """
    Prints statistics about Nginx logs stored in MongoDB.
    """
    # Conexión a la base de datos MongoDB
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    # Cantidad total de logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Métodos HTTP
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Logs con method = GET y path = /status
    status_check_count = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check_count} status check")

if __name__ == "__main__":
    log_stats()
