#include "node.h"
#include <stdio.h>
#include <stdlib.h>

typedef struct STACK{
	NODE *top;
} STACK;

NODE* pop(STACK s){
	if(s->top != NULL){
		NODE *ptr = s->top;
		return ptr;
	} else {
		return NULL;
	}
}

void push(STACK s, NODE *n){
	//make sure the stack is valid
	if(s != NULL){
		//new stack, add the new node as the first element
		if(s->top == NULL){
			s->top = n;
			n->next = NULL;
		} else {
			n->next = s->top;
			s->top = n;
		}
	}
}