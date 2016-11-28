#include "node.h"
#include <stdio.h>
#include <stdlib.h>

typedef struct QUEUE{
	NODE *tail;
} QUEUE;

void enqueue(QUEUE *q, NODE *n){
	if(tail != NULL){
		q->tail->next = n;
		n->next = null;
		q->tail = n;
	} else {
		return;
	}
}

NODE* dequeue(QUEUE *q){
	NODE *ptr = q->tail;
	if(q->tail != NULL){
		while(ptr->next->next != NULL){
			ptr = ptr->next;
		}
		NODE *release = ptr->next;
		ptr->next = NULL;
		return release;
	} else {
		return NULL;
	}
}