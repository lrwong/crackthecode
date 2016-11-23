#include "node.h"
#include <stdio.h>
#include <stdbool.h>

//removes the current node and re-links the list
void removeNode(NODE *prev, NODE *cur){
	if(cur->next != NULL){
		prev->next = cur->next;
	} else {
		prev->next = NULL;
	}
	free(cur);
}

void addNode(NODE *head, NODE *newNode){
	NODE *temp = head;
	while(temp->next!=NULL){
		temp->next = newNode;
	}
	temp->next = newNode;
	newNode->next = NULL;
	return;
}

//remove duplicates from an unsorted, singly linked list of nodes without using a temporary buffer
void dedupeNoBuff(NODE *head){
	NODE *cur = head;
	NODE *ptr, *prev;

	if(head->next == NULL){
		return;
	}
	
	//init ptr to the second node and prev to the first node
	ptr = cur->next;
	prev = cur;

	//loop through the linked list, for each element scan the rest of the list for duplicates
	while(cur->next != NULL){
		while(ptr->next != NULL){
			if(ptr->data == cur->data){
				removeNode(prev, ptr);
			}
			prev = ptr;
			ptr = ptr->next;
		}
		prev = cur;
		cur = cur->next;
	}
	return;
}

//remove duplicates from an unsorted, singly linked list of Nodes using a temp buffer
void dedupeBuff(NODE *head){
	NODE *newHead, *prev, *cur, *temp;
	bool found;

	//head of the old list will be the first element in the new list
	//set cur to the second element in the old list to begin processing
	newHead = head;
	cur = head->next;

	while(cur->next != NULL){

		temp = cur;
		found = false;
		//traverse new list to see if the current element in old list already exists
		//if it exists, then the element is a duplicate and can be dropped
		//if it does not already exist in the new list, node is unique and should be added
		while(!found && temp->next != NULL){
			if(cur->data == temp->data){
				found = true;
			}
			temp = temp->next;
		}

		//if the current node in old list is not found in new list, add it to the new list
		if(!found){
			addNode(newHead, cur);
		}
	}
	return;
}