class Sudoku(object):
    """
        URL: https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/python
        QUESTION:

        Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

    The data structure is a multi-dimensional Array, i.e:

    [
      [7,8,4,  1,5,9,  3,2,6],
      [5,3,9,  6,7,2,  8,4,1],
      [6,1,2,  4,3,8,  7,5,9],

      [9,2,8,  7,1,5,  4,6,3],
      [3,5,7,  8,4,6,  1,9,2],
      [4,6,1,  9,2,3,  5,8,7],

      [8,7,6,  3,9,4,  2,1,5],
      [2,4,3,  5,6,1,  9,7,8],
      [1,9,5,  2,8,7,  6,3,4]
    ]
    Rules for validation

    Data structure dimension: NxN where N > 0 and √N == integer
    Rows may only contain integers: 1..N (N included)
    Columns may only contain integers: 1..N (N included)
    'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)
    """

    def __init__(self, data: list[list[int]]):
        self.data: list[list[int]] = data

    def is_nxn(self):
        self.size: int = len(self.data)
        if self.size == 0 or any(
            [True if type(elem) != type([]) else False for elem in self.data]
        ):
            return False
        for i in self.data:
            all_int = all([True if type(elem) == type(1) else False for elem in i])
            if len(i) != self.size or not all_int:
                return False
        return True

    def is_sub_sudoku(self):
        sum_to_n = sum(range(1, self.size + 1))
        sub_sudoku_length = int(self.size**0.5)
        for i in range(0, self.size - 1, sub_sudoku_length):
            for j in range(0, self.size - 1, sub_sudoku_length):
                # Gets each row of sub-sudoku
                sub_sudoku_sum = 0
                for k in range(sub_sudoku_length):
                    sub_sudoku_sum += sum(self.data[i + k][j : j + sub_sudoku_length])
                if sub_sudoku_sum != sum_to_n:
                    return False
        return True

    def __repr__(self):
        return "\n".join([f"{data}" for data in self.data])

    def is_valid(self):
        if not self.is_nxn():
            return False

        sum_to_n = sum(range(1, self.size + 1))
        for index in range(self.size):
            col_sum = sum([self.data[i][index] for i in range(self.size)])
            if sum(self.data[index]) != sum_to_n or col_sum != sum_to_n:
                return False

            if (index != 0 or (index + 1) % self.size != 0) and index < self.size:
                continue
        return self.is_sub_sudoku()
