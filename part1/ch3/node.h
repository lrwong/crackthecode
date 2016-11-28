#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>


typedef struct NODE{
	struct NODE *next;
	int data;
	bool visited;
} NODE;