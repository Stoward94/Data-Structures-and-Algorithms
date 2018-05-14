# Linked Lists

The Linked List data structure, sometimes referred to as the singly-linked list, is comprised of 1 or more "nodes" that each have two properties, a value that was stored and a reference to the next node in the chain.

This single direction of linkage is great for inserting and removing items as it just requires the target node(s) to update their reference to the next node. However, indexing is much slower than ArrayLists, as you have to start at the first node (head) and hop from on node to the next, until you reach the target, you can't just jump to a given index.

[Linked Lists Big-O](http://bigocheatsheet.com/)

[Singly Linked Lists Wiki](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_lists)