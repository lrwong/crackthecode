#include "node.h"
#include <stdio.h>
#include <stdlib.h>

void rmNode(NODE *n){
	NODE *temp = n->next;
	n->data = temp->data;
	n->next = temp->next;
	free(temp);
}