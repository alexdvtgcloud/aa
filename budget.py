class Budget(object):
    def __init__(self, ref, b_type, detail, amount):
        self.b_id = str(ref.path).split("/")[1]
        self.b_type = b_type
        self.detail = detail
        self.amount = amount

    def to_dict(self):
        return {
            "id": self.b_id,
            "type": self.b_type,
            "detail": self.detail,
            "amount": self.amount,
        }
