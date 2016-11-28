/*include a pointer to the minimum and reset the pointer 
whenever a lower element is pushed to the stack*/

#include "node.h"
#include "stack.h"
#include <stdio.h>

void push(STACK *s, NODE *n){
	if(s != NULL){
		//new stack, add the new node as the first element
		if(s->top == NULL){
			s->top = n;
			n->next = NULL;
			s->min = s->top;
		} else {
			n->next = s->top;
			s->top = n;
			if(s->top < s->min){
				s->min = s->top;
			}
		}
	}
}

NODE* getMin(STACK *s){
	return s->min;
}