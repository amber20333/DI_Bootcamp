class Door:
    
    def __init__(self):
        self.is_opened = False

    def open(self):
        self.is_opened = True
    def close(self):
        self.is_opened = False

class BlockedDoor(Door):

    def open(self):
        raise AttributeError("BlockedDoor cannot be opened!")
    def close(self):
        raise AttributeError("BlockedDoor cannot be closed!")

blocked_door = BlockedDoor()
# blocked_door.open()

blocked_door.close()
