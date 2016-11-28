/*
to implement three stacks using an array, you could allocate indexes 0, 1, and 2 to be the 
first element of each stack. Each proceeding element in each stack would be a multiple of 
3 beginning at the index of the first element. To add values out of order, it would
be necessary to maintain a pointer the index of the top element in each stack

index: stack assignment
0: s1
1: s2
2: s3
3: s1
4: s2
5: s3

stack assignment = (index % 3) + 1 -> index of 10 is assigned to stack "s2"
next index = (top + 3)
*/