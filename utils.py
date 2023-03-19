def load_sections():
    Section.objects.all().delete()
    with open("../../sections.csv", "r") as f:
        lines = f.readlines()
    lines = lines[1:]
    for line in lines:
        line_sp = line.split(",")
        name = line_sp[0]
        order = int(line_sp[1].strip("\n"))
        Section.objects.create(name=name, order=order)


def load_sections():
    Item.objects.all().delete()
    with open("../../groceries.csv", "r") as f:
        lines = f.readlines()
    lines = lines[1:]
    for line in lines:
        line_sp = line.split(",")
        name = line_sp[0].lower()
        section = line_sp[1].strip("\n")
        section_obj = Section.objects.get(name=section)
        Item.objects.create(name=name, section=section_obj)
