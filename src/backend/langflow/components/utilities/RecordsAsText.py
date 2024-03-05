from langflow import CustomComponent
from langflow.field_typing import Text
from langflow.helpers.record import records_to_text
from langflow.schema import Record


class RecordsAsTextComponent(CustomComponent):
    display_name = "Records to Text"
    description = "Converts Records a list of Records to text using a template."

    def build_config(self):
        return {
            "records": {
                "display_name": "Records",
                "info": "The records to convert to text.",
            },
            "template": {
                "display_name": "Template",
                "info": "The template to use for formatting the records. It must contain the keys {text} and {data}.",
            },
        }

    def build(
        self,
        records: list[Record],
        template: str = "Text: {text}\nData: {data}",
    ) -> Text:
        if not records:
            return ""
        if isinstance(records, Record):
            records = [records]

        result_string = records_to_text(template, records)
        self.status = result_string
        return result_string
