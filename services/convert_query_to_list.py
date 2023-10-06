def convert_query_to_list(model) -> list:
    """
    Executes database requests
    :param model: database model
    :return: list of dictionaries contents model object's data
    """

    list_query = model.objects.values()
    list = [item for item in list_query]
    return list
