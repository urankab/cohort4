import os


def countLines():
    file = open('C:/code/cohort4/06-python/src/comp220-file-io/syntax.js', 'r')
    count = len(file.readlines())
    return(f'Total number of lines is: {count}')


def countElse():
    count = 0
    searchFor = 'else'
    with open('C:/code/cohort4/06-python/src/comp220-file-io/syntax.js') as file:
        for line in file:
            if searchFor in line:
                count += 1
    return(f'There are {count} else statements')


def countChars():
    file = open('C:/code/cohort4/06-python/src/comp220-file-io/syntax.js', 'r')
    data = file.read()
    charCount = len(data)
    return(f'There are {charCount} characters in syntax.js')


def listOfFiles():
    path = '/code/cohort4/01-getting-started/src/scripts'
    entries = os.listdir(path)
    dirSize = os.path.getsize(path)
    fileCount = 0
    listofStuff = []

    for entry in entries:
        fileSize = os.path.getsize(path + '/' + entry)
        fileCount += 1
        print(f'File name: {entry} ~ Size: {fileSize} bytes')
        listofStuff.append(f'File name: {entry} ~ Size: {fileSize} bytes')

    print(f'Directory size: {dirSize} # of files: {fileCount}')
    listofStuff.append(f'Directory size: {dirSize} # of files: {fileCount}')
    return listofStuff


if __name__ == "__main__":
    countLines()      
    countElse()
    countChars()
    listOfFiles()  
