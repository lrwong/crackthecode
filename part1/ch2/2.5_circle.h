#include "node.h"
#include <stdio.h>

NODE* findDupe(NODE *n){
	NODE *ptr = n;
	while(ptr->next != NULL){
		if(ptr->visited == true){
			return ptr;
		} else {
			ptr->visited = true;
			ptr = ptr->next;
		}
	}
	return NULL;
}