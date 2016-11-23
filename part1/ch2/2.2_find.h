#include "node.h"
#include <stdio.h>
#include <stdlib.h>


//finds the nth to last element in a singly linked list
NODE* findNode(int n, NODE *head){
	int i;
	int count = 0;
	NODE *temp;

	while(temp->next != NULL){
		count++;
		temp = temp->next;
	}

	temp = head;
	for(i = 0; i < count; i++){
		temp = temp-> next;
	}
	return temp;
}