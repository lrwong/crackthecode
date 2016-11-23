#include <stdio.h>
#include <string.h>
#include <stdlib.h>


typedef struct NODE{
	struct NODE *next;
	int data;
} NODE;