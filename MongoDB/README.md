# MongoDB v7

<img src=images/mongodb_basics.png width=500 />

## document & collection

- database consists of collection(s).
- collection consists of document(s).

## view

- read-only queryable object
- defined by an aggregation pipeline on other collections or views.
- does not persist the view contents to disk
  (⭐On-demand materialized view does).
- It's content is computed on-demand when a client queries the view
  (⭐On-demand materialized views provide better performance, because they are read from disk instead of computed as part of the query).
