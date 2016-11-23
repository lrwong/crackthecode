#include "node.h"
#include <stdio.h>
#include <math.h>

int buildNum(NODE *n){
	NODE *ptr = n;
	int place = 0;
	int val = 0;
	while(ptr->next != NULL){
		val += (n->data) * (int)(pow(10, place));
		place++;
		ptr = ptr->next;
	}
	return val;
}

int addNodes(NODE *num1, NODE *num2){
	int val1 = buildNum(num1);
	int val2 = buildNum(num2);
	int out = val1 + val2;
	return out;
}