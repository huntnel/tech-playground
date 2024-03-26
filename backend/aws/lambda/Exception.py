import json
import Solution
def exception_handler(e):

    if isinstance(e, Solution.InvalidCodeException):
        return {
            'statusCode': 200,
            'body': json.dumps({
                    'result': str(e),
                    'taskComplete': False,
                    'consoleMessage': None,
                })
        }
    return {
        'statusCode': 400,
        'body': json.dumps(str(e))
    }